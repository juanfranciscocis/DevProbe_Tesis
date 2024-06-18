import { Injectable } from '@angular/core';
import {Firestore} from "@angular/fire/firestore";
import {HttpClient} from "@angular/common/http";
import {Traceroute, TracerouteResult} from "../classes/traceroute";
import {IpApi} from "../interfaces/ip-api";

@Injectable({
  providedIn: 'root'
})
export class LocationTraceService {

  private ipApiURL = 'https://cors-ea3m.onrender.com/http://ip-api.com/json/';

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

  async getLocationDestSrc(traceroute: Traceroute): Promise<Traceroute> {
    if (!traceroute) {
      return traceroute;
    }
    // Primera solicitud
    const dest = this.http.get<IpApi>(this.ipApiURL + traceroute.dst_addr).toPromise();
    const from = this.http.get<IpApi>(this.ipApiURL + traceroute.src_addr).toPromise();
    const destData = await dest;
    const fromData = await from;


    // Actualiza los datos para todos los elementos en ripeData
    traceroute.dst_city = destData!.city ?? 'No city found';
    traceroute.dst_country = destData!.country ?? 'No country found';
    traceroute.dst_latitude = destData!.lat ?? 0;
    traceroute.dst_longitude = destData!.lon ?? 0;
    traceroute.src_city = fromData!.city ?? 'No city found';
    traceroute.src_country = fromData!.country ?? 'No country found';
    traceroute.src_latitude = fromData!.lat ?? 0;
    traceroute.src_longitude = fromData!.lon ?? 0;




    return traceroute;


  }

  async getLocationFrom(traceroute: Traceroute): Promise<Traceroute> {
    if (!traceroute) {
      return traceroute;
    }

    let results = traceroute.result!;
    for (let i = 0; i < results.length; i++) {
      let result = results[i];
      let from = result.result![0].from;
      if (!from) {
        continue
      }
      const apiData = this.http.get<IpApi>(this.ipApiURL + from).toPromise();
      const fromData:IpApi = await apiData as IpApi;
      result.result![0].from_country = fromData.country ?? 'No country found';
      result.result![0].form_city = fromData.city ?? 'No city found';
      result.result![0].from_latitude = fromData.lat ?? 0;
      result.result![0].from_longitude = fromData.lon ?? 0;



      traceroute.result![i] = result;
    }
    return traceroute;
  }



}
