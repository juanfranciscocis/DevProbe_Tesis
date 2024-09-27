import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {Incident} from "../interfaces/incident";

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private firestore: Firestore
  ) {
  }


  async saveIncident(orgName: string, productObjective: string, productStep: string, incident: Incident) {
    try {
    console.log(incident);



    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'incident', productStep);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //get the incidents array
      // @ts-ignore
      let dataIncident = data.incidents;
      dataIncident.push({
        ...incident,
      });
      await setDoc(docRef, data);
      return true;
    } else {
      console.log('No such document!');
      //create the document
      await setDoc(docRef, {incidents: [incident]});
      return true;
    }
    } catch (e) {
      console.log(e);
      return false;
    }

  }

}
