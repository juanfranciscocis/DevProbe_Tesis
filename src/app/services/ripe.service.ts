import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RipeService {

  private measurementsUrl = 'https://cors-anywhere.herokuapp.com/https://atlas.ripe.net/api/v2/measurements/';

  constructor(
    private http: HttpClient
  ) { }

  sendMeasurementRequest() {
    let body = {
        "definitions": [
        {
          "target": "portfoliojuanfranciscocisneros.web.app",
          "description": "My First Measurement, A mi portfolio 5",
          "type": "ping",
          "af": 4,
          "is_oneoff":true
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

      // Send the request with a header Authorization
      this.http.post(this.measurementsUrl, body, {
        headers: {
            'Authorization': 'Key 92530695-134f-4cbc-b7c3-ec130f3719b0'
        }
      }).subscribe((response) => {
        console.log("response", response);
      });

  }





}
