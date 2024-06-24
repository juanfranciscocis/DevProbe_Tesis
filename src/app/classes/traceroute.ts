// To parse this data:
//
//   import { Convert, Traceroute } from "./file";
//
//   const traceroute = Convert.toTraceroute(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Traceroute {
  id?: string;
  fw?:                       number;
  mver?:                     string;
  lts?:                      number;
  endtime?:                  number;
  dst_name?:                 string;

  dst_addr?:                 string;
  dst_city?:                 string;
  dst_country?:              string;
  dst_latitude?:             number;
  dst_longitude?:            number;

  src_addr?:                 string;
  src_city?:                 string;
  src_latitude?:             number;
  src_longitude?:            number

  src_country?:              string
  proto?:                    string;
  af?:                       number;
  size?:                     number;
  paris_id?:                 number;
  result?:                   TracerouteResult[];
  destination_ip_responded?: boolean;
  msm_id?:                   number;
  prb_id?:                   number;
  timestamp?:                number;
  msm_name?:                 string;
  from?:                     string;
  type?:                     string;
  group_id?:                 number;
  stored_timestamp?:         number;
}

export interface TracerouteResult {
  hop?:    number;
  result?: ResultResult[];
}

export interface ResultResult {
  from?:    string;
  from_latitude?: number;
  from_longitude?: number;

  ttl?:     number;
  size?:    number;
  rtt?:     number;
  x?:       string;
  tos?:     number;
  flags?:   string;
  hdropts?: Hdropt[];

  from_country?: string;
  form_city?: string;

}

export interface Hdropt {
  mss?: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTraceroute(json: string): Traceroute {
    return cast(JSON.parse(json), r("Traceroute"));
  }

  public static tracerouteToJson(value: Traceroute): string {
    return JSON.stringify(uncast(value, r("Traceroute")), null, 2);
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
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
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
  "Traceroute": o([
    { json: "fw", js: "fw", typ: u(undefined, 0) },
    { json: "mver", js: "mver", typ: u(undefined, "") },
    { json: "lts", js: "lts", typ: u(undefined, 0) },
    { json: "endtime", js: "endtime", typ: u(undefined, 0) },
    { json: "dst_name", js: "dst_name", typ: u(undefined, "") },
    { json: "dst_addr", js: "dst_addr", typ: u(undefined, "") },
    { json: "src_addr", js: "src_addr", typ: u(undefined, "") },
    { json: "proto", js: "proto", typ: u(undefined, "") },
    { json: "af", js: "af", typ: u(undefined, 0) },
    { json: "size", js: "size", typ: u(undefined, 0) },
    { json: "paris_id", js: "paris_id", typ: u(undefined, 0) },
    { json: "result", js: "result", typ: u(undefined, a(r("TracerouteResult"))) },
    { json: "destination_ip_responded", js: "destination_ip_responded", typ: u(undefined, true) },
    { json: "msm_id", js: "msm_id", typ: u(undefined, 0) },
    { json: "prb_id", js: "prb_id", typ: u(undefined, 0) },
    { json: "timestamp", js: "timestamp", typ: u(undefined, 0) },
    { json: "msm_name", js: "msm_name", typ: u(undefined, "") },
    { json: "from", js: "from", typ: u(undefined, "") },
    { json: "type", js: "type", typ: u(undefined, "") },
    { json: "group_id", js: "group_id", typ: u(undefined, 0) },
    { json: "stored_timestamp", js: "stored_timestamp", typ: u(undefined, 0) },
  ], false),
  "TracerouteResult": o([
    { json: "hop", js: "hop", typ: u(undefined, 0) },
    { json: "result", js: "result", typ: u(undefined, a(r("ResultResult"))) },
  ], false),
  "ResultResult": o([
    { json: "from", js: "from", typ: u(undefined, "") },
    { json: "ttl", js: "ttl", typ: u(undefined, 0) },
    { json: "size", js: "size", typ: u(undefined, 0) },
    { json: "rtt", js: "rtt", typ: u(undefined, 3.14) },
    { json: "x", js: "x", typ: u(undefined, "") },
    { json: "tos", js: "tos", typ: u(undefined, 0) },
    { json: "flags", js: "flags", typ: u(undefined, "") },
    { json: "hdropts", js: "hdropts", typ: u(undefined, a(r("Hdropt"))) },
  ], false),
  "Hdropt": o([
    { json: "mss", js: "mss", typ: u(undefined, 0) },
  ], false),
};
