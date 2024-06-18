import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {collection, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Ripe} from "../interfaces/ripe";
import {Traceroute} from "../classes/traceroute";

@Injectable({
  providedIn: 'root'
})
export class RipeTraceService {

  private measurementsUrl = 'https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/';
  public measurementID: string = '73614089';


  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) { }


  async sendTraceRequest(target: string, description: string, type: string, probes:string) {
    try{
      let body = {
        "definitions": [
          {
            "target": target,
            "description": description,
            "type": type,
            "af": 4,
            "is_oneoff": true,
            "protocol": "TCP"
          }
        ],
        "probes": [
        ]
      }

      //read the array of probes and create the body
      console.log(probes);
      let size =  probes.split(',').length - 1;
      probes = probes.slice(0, -1);
      let probesArray = probes.split(',');
      let probesBody = [];
      for (let i = 0; i < size; i++){
        probesBody.push({
          "requested": 5,
          "type": "country",
          "value": probesArray[i]
        })
      }

      // @ts-ignore
      body['probes'] = probesBody;
      console.log(body);

      let headers = {
        "Authorization": "Key 92530695-134f-4cbc-b7c3-ec130f3719b0"
      }

      console.log(body);

      let response: any = await this.http.post(this.measurementsUrl, body, {headers: headers}).toPromise();
      console.log(response);
      this.measurementID = response['measurements'][0];
      return true;

    }catch (e){
      console.log(e);
      return false;
    }
  }


   async getTraceResults(id?:string){
    if (id) {
      this.measurementID = id;
    }
    try {
      let headers
      if (this.measurementID === '') {
        console.log('No measurement ID');
        return false;
      }
      return this.http.get<Traceroute[]>(this.measurementsUrl + this.measurementID + '/results/', {headers: headers}).toPromise();
    } catch (e) {
      console.log(e);
      return false;
    }
   }

   async saveMeasurementResults(orgName: string, productObjective: string, description: string, traceroutes: Traceroute[]) {
    try{
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, 'ripe_trace')
      const docRef = doc(collectionRef, description);

      const data = traceroutes.map((item, index) => ({
        dst_addr: item.dst_addr,
        dst_city: item.dst_city,
        dst_country: item.dst_country,
        dst_latitude: item.dst_latitude,
        dst_longitude: item.dst_longitude,
        src_addr: item.src_addr,
        src_city: item.src_city,
        src_country: item.src_country,
        src_latitude: item.src_latitude,
        src_longitude: item.src_longitude,
        result: item.result
      }));
      await setDoc(docRef, { data });
      return true;
    }catch (e){
      console.log(e);
      return false;
    }

   }











}
