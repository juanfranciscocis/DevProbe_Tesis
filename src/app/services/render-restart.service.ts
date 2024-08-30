import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RenderRestartService {

  url = 'https://cors-ea3m.onrender.com/https://api.render.com/v1/services/srv-cqppi8qj1k6c73dundi0/restart';
  auth = 'Bearer rnd_tAWW9ihQ19RaIAFzrHANjIG8wBX0';

  constructor(
    private http: HttpClient
  ) {
  }

  async restartService() {
    try {
      let headers = {
        'Authorization': this.auth
      }

      let response: any = await this.http.post(this.url, {}, {headers: headers}).toPromise();
      console.log("res", response);
      return response;
    } catch (e) {
      console.log(e);
      return false;
    }

  }

}
