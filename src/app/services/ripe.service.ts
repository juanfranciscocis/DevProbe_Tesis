import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RipeService {

  private measurementsUrl = 'https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/';
  private measurementID: string = '';

  constructor(
    private http: HttpClient
  ) { }

  async sendMeasurementRequest(target: string, description: string, type: string) {
    let body = {
      "definitions": [
        {
          "target": target,
          "description": description,
          "type": "ping",
          "af": 4,
          "is_oneoff": true
        }
      ],
      "probes": [
        {
          "requested": 1,
          "type": "area",
          "value": "WW"
        }
      ]
    }

    let headers = {
      "Authorization":"Key 92530695-134f-4cbc-b7c3-ec130f3719b0"
    }

    console.log(body);

    let response:any = await this.http.post(this.measurementsUrl, body, {headers: headers}).toPromise();
    console.log(response);
    this.measurementID = response['measurements'][0];
    console.log(this.measurementID);
  }

  async getMeasurementResults() {
    let headers = {
      "Authorization": "Key 92530695-134f-4cbc-b7c3-ec130f3719b0"
    }
    let response: any = await this.http.get(this.measurementsUrl + this.measurementID + '/results/', {headers: headers}).toPromise();
    return response;
  }






}
