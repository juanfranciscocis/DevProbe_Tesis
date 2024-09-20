import {Injectable} from '@angular/core';
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {Convert} from "../classes/artillery-data";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoadTestService {

  url = 'https://devprobeapi.onrender.com/create_load_test';


  constructor(
    private firestore: Firestore,
    private http: HttpClient,
  ) { }

  async getLoadTestHistory(orgName: string, productObjective: string, productStep: string,) {
    const docRef = doc(this.firestore,'teams', orgName, 'products', productObjective, 'load_test', productStep);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      console.log(data);

      //get all keys
      let keys = Object.keys(data);
      console.log(keys);


      for (let key of keys) {
        let toParse = data[key];
        //parse to ArtilleryData
        data[key] = Convert.toArtilleryData(toParse);
      }




      return data;
    }
    return {};
  }

  async sendLoadTest(orgName: string, productObjective: string, productStep: string, targetURL: string) {
    try {
      //send post request to create load test
      const body = {
        team: orgName,
        product: productObjective,
        service: productStep,
        target: `https://${targetURL}`
      };
      return await this.http.post(this.url, body).toPromise()
    } catch (error) {
      return {};
    }

  }

  async getLoadTestHistoryByDate(orgName: string, productObjective: string, productStep: string, date: string) {
    const docRef = doc(this.firestore,'teams', orgName, 'products', productObjective, 'load_test', productStep);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      console.log(data);

      //get all keys
      let keys = Object.keys(data);
      console.log(keys);


      for (let key of keys) {
        let toParse = data[key];
        //parse to ArtilleryData
        data[key] = Convert.toArtilleryData(toParse);
        let year = data[key].date.split('-')[0];
        let month = data[key].date.split('-')[1];
        let day = data[key].date.split('-')[2];

        let fbDate = year + '-' + month + '-' + day;

        if (fbDate !== date) {
          delete data[key];
        }

      }
      //Data is now filtered by date
      console.log('Filtered by Date: ',data);

      return data;
    }
    return {};
  }



}
