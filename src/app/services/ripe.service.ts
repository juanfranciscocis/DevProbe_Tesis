import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ripe} from "../interfaces/ripe";
import {Observable} from "rxjs";
import {collection, deleteDoc, doc, Firestore, getDoc, getDocs, setDoc} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class RipeService {

  private measurementsUrl = 'https://cors-ea3m.onrender.com/https://atlas.ripe.net/api/v2/measurements/';
  public measurementID: string = '';

  constructor(
    private http: HttpClient,
    private firestore: Firestore
  ) {
  }

  async sendMeasurementRequest(target: string, description: string, type: string, probes:string) {
    let size =  probes.split(',').length - 1;
    probes = probes.slice(0, -1);
    try {
      let body = {
      "definitions": [
        {
          "target": target,
          "description": "ping",
          "type": "ping",
          "af": 4,
          "is_oneoff": true
        }
      ],
      "probes": [
        {
          "requested": size,
          "type": "probes",
          "value": probes
        }
      ]
    }

      let headers = {
        "Authorization": "Key 92530695-134f-4cbc-b7c3-ec130f3719b0"
      }

      console.log(body);

      let response: any = await this.http.post(this.measurementsUrl, body, {headers: headers}).toPromise();
      console.log(response);
      this.measurementID = response['measurements'][0];
      return this.measurementID;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async getMeasurementResults(id?:string){

    if (id) {
      this.measurementID = id;
    }

    try {
      let headers = {
        "Authorization": "Key 92530695-134f-4cbc-b7c3-ec130f3719b0"
      }

      if (this.measurementID === '') {
        console.log('No measurement ID');
        return false;
      }

      return this.http.get<Ripe[]>(this.measurementsUrl + this.measurementID + '/results/', {headers: headers})
    } catch (e) {
      console.log(e);
      return new Observable<Ripe[]>();
    }

  }

  async saveMeasurementResults(orgName:string, productObjective:string,description:string ,ripeData:Ripe[]){
    try {
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, 'ripe');
      const docRef = doc(collectionRef, description); // Use description as the document ID

      // Prepare the data
      const data = ripeData.map((item, index) => ({
          id: this.measurementID,
          from: item.from,
          dst_addr: item.dst_addr,
          latency: item.latency
      }));

      await setDoc(docRef, { data });

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }


  async getAllResultsByDescription(orgName:string, productObjective:string, description:string):Promise<Ripe[]>{
    try {
      let path = 'teams/' + orgName + '/products/' + productObjective + '/ripe';
      console.log(path);
      let ref = doc(this.firestore, path, description);
      const fetchOrg = await getDoc(ref);
      const ripeData = fetchOrg.data();
      return ripeData as Ripe[];
    }catch (e) {
      console.log(e);
      return [];
    }

  }

async getHistoryResults(orgName:string, productObjective:string):Promise<{id: string, data: Ripe}[]>{
  let path = 'teams/' + orgName + '/products/' + productObjective + '/ripe';
  //get all documents in the collection
  const collectionRef = collection(this.firestore, path);
  const products = await getDocs(collectionRef);
  let ripeData:{id: string, data: Ripe}[] = [];
  products.docs.forEach(doc => {
    ripeData.push({id: doc.id, data: doc.data() as Ripe});
  });
  console.log(ripeData);
  return ripeData;
}


  async deleteHistory(orgName: string, productObjective: string, description: string) {
    let path = 'teams/' + orgName + '/products/' + productObjective + '/ripe';
    const ref = doc(this.firestore, path, description);
    try {
      await deleteDoc(ref);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
