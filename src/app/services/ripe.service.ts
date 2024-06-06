import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RipeService {

  private apiKey: string =''
  private measurementURL: string = 'https://atlas.ripe.net/api/v2/measurements/'
  private measurementID: string = ''
  private resultsURL: string = '/results/'



  constructor(
    private http: HttpClient
  ) { }

  async newMeasurement(target:string, desciption:string, type:string){
    let body = {
      "definitions": [
        {
          "target": "",
          "description": "",
          "type": "",
          "af": 4,
          "is_oneoff": true,
        }
      ],
      "probes": [
        {
          "requested": 10,
          "type": "area",
          "value": "WW"
        }
      ],
    }
    let headers = {
      'Authorization': this.apiKey
    }

    let response: any = await this.http.post(this.measurementURL, body, {headers: headers}).toPromise();
    if (response && response.measurements && response.measurements.length > 0){
      this.measurementID = response.measurements[0].toString();
    }
    console.log(this.measurementID);

  }




}
