// To parse this data:
//
//   import { Convert, ArtilleryData } from "./file";
//
//   const artilleryData = Convert.toArtilleryData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ArtilleryData {
  aggregate?: Aggregate | null;
  intermediate?: Intermediate[] | null;
  date?: string | null;
}

export interface Aggregate {
  counters?: { [key: string]: number } | null;
  rates?: Rates | null;
  firstCounterAt?: number | null;
  firstHistogramAt?: number | null;
  lastCounterAt?: number | null;
  lastHistogramAt?: number | null;
  firstMetricAt?: number | null;
  lastMetricAt?: number | null;
  period?: number | null;
  summaries?: Histograms | null;
  histograms?: Histograms | null;
}

export interface Histograms {
  "http.response_time"?: { [key: string]: number } | null | undefined;
  "plugins.metrics-by-endpoint.response_time./"?: { [key: string]: number } | null | undefined;
  "vusers.session_length"?: { [key: string]: number } | null | undefined;
}
export interface Rates {
  "http.request_rate"?: number | null;
}

export interface Intermediate {
  counters?: { [key: string]: number } | null;
  rates?: Rates | null;
  "http.request_rate"?: number | null;
  firstCounterAt?: number | null;
  firstHistogramAt?: number | null;
  lastCounterAt?: number | null;
  lastHistogramAt?: number | null;
  firstMetricAt?: number | null;
  lastMetricAt?: number | null;
  period?: string | null;
  summaries?: Histograms | null;
  histograms?: Histograms | null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toArtilleryData(json: string): ArtilleryData {
    return cast(JSON.parse(json), r("ArtilleryData"));
  }

  public static artilleryDataToJson(value: ArtilleryData): string {
    return JSON.stringify(uncast(value, r("ArtilleryData")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }

    const result: any = {};

    // Iterar sobre las propiedades esperadas
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;

      // Si el valor es undefined, no lanzamos error, solo lo asignamos
      result[prop.key] = v !== undefined ? transform(v, prop.typ, getProps, key, ref) : undefined;
    });

    // Manejo de propiedades adicionales
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });

    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "ArtilleryData": o([
    { json: "aggregate", js: "aggregate", typ: r("Aggregate") },
    { json: "intermediate", js: "intermediate", typ: a(r("Intermediate")) },
    { json: "date", js: "date", typ: "" },
  ], false),
  "Aggregate": o([
    { json: "counters", js: "counters", typ: m(0) },
    { json: "rates", js: "rates", typ: r("Rates") },
    { json: "firstCounterAt", js: "firstCounterAt", typ: 0 },
    { json: "firstHistogramAt", js: "firstHistogramAt", typ: 0 },
    { json: "lastCounterAt", js: "lastCounterAt", typ: 0 },
    { json: "lastHistogramAt", js: "lastHistogramAt", typ: 0 },
    { json: "firstMetricAt", js: "firstMetricAt", typ: 0 },
    { json: "lastMetricAt", js: "lastMetricAt", typ: 0 },
    { json: "period", js: "period", typ: 0 },
    { json: "summaries", js: "summaries", typ: r("Histograms") },
    { json: "histograms", js: "histograms", typ: r("Histograms") },
  ], false),
  "Histograms": o([
    { json: "http.response_time", js: "http.response_time", typ: m(3.14) },
    { json: "plugins.metrics-by-endpoint.response_time./", js: "plugins.metrics-by-endpoint.response_time./", typ: m(3.14) },
    { json: "vusers.session_length", js: "vusers.session_length", typ: u(undefined, m(3.14)) },
  ], false),
  "Rates": o([
    { json: "http.request_rate", js: "http.request_rate", typ: 0 },
  ], false),
  "Intermediate": o([
    { json: "counters", js: "counters", typ: m(0) },
    { json: "rates", js: "rates", typ: r("Rates") },
    { json: "http.request_rate", js: "http.request_rate", typ: null },
    { json: "firstCounterAt", js: "firstCounterAt", typ: 0 },
    { json: "firstHistogramAt", js: "firstHistogramAt", typ: 0 },
    { json: "lastCounterAt", js: "lastCounterAt", typ: 0 },
    { json: "lastHistogramAt", js: "lastHistogramAt", typ: 0 },
    { json: "firstMetricAt", js: "firstMetricAt", typ: 0 },
    { json: "lastMetricAt", js: "lastMetricAt", typ: 0 },
    { json: "period", js: "period", typ: "" },
    { json: "summaries", js: "summaries", typ: r("Histograms") },
    { json: "histograms", js: "histograms", typ: r("Histograms") },
  ], false),
};
