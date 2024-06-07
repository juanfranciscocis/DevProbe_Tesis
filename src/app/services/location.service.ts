import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Ripe } from '../interfaces/ripe';
import { IpApi } from '../interfaces/ip-api';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private ipApiURL = 'https://cors-ea3m.onrender.com/http://ip-api.com/json/';

  constructor(
    private firestore: Firestore,
    private http: HttpClient
  ) { }

  async getLocation(ripeData: Ripe[]): Promise<Ripe[]> {

    console.log(ripeData);

    // Primera solicitud
    const fromLoc = this.http.get<IpApi>(this.ipApiURL + ripeData[0].dst_addr).toPromise();
    const fromData = await fromLoc;

    // Actualiza los datos para todos los elementos en ripeData
    for (let i = 0; i < ripeData.length; i++) {
      ripeData[i].toLatitude = fromData!.lat;
      ripeData[i].toLongitude = fromData!.lon;
      ripeData[i].cityTo = fromData!.city;
      ripeData[i].countryTo = fromData!.country;
    }

    // Segunda solicitud
    const promises = ripeData.map((ripe) => this.http.get<IpApi>(this.ipApiURL + ripe.from).toPromise());
    const results = await Promise.all(promises);

    // Actualiza los datos con los resultados de la segunda solicitud
    results.forEach((data, index) => {
      ripeData[index].fromLatitude = data!.lat;
      ripeData[index].fromLongitude = data!.lon;
      ripeData[index].cityFrom = data!.city;
      ripeData[index].countryFrom = data!.country;
    });

    console.log(ripeData);

    return ripeData;
  }

  async saveLocationResults(orgName: string, productObjective: string, description: string, ripeData: Ripe[]) {
    try {
      console.log(ripeData, "ripeData");
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, 'ripe');
      const docRef = doc(collectionRef, description); // Use description as the document ID

      //Create a new object called locationData, this object will have all the arrays of ripeData
      // Prepare the data
      const data = ripeData.map((item) => ({
        from: item.from,
        dst_addr: item.dst_addr,
        latency: item.latency,
        cityFrom: item.cityFrom,
        countryFrom: item.countryFrom,
        cityTo: item.cityTo,
        countryTo: item.countryTo,
        fromLatitude: item.fromLatitude,
        fromLongitude: item.fromLongitude,
        toLatitude: item.toLatitude,
        toLongitude: item.toLongitude
      }));
      await setDoc(docRef, { data });
      console.log("Data saved", { data });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}
