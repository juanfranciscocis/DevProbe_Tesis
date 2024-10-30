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

  async getIncidents(orgName: string, productObjective: string, productStep: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'incident', productStep);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      console.log(data);
      // @ts-ignore
      return data.incidents;
    }
    return [];
  }

  async getIncident(orgName: string, productObjective: string, productStep: string, incidentTitle:string) {
    let incidents = await this.getIncidents(orgName, productObjective, productStep) as Incident[]
    //search for the incident using the title
    for (let i = 0; i <= incidents.length; i++) {
      if (incidents[i].title === incidentTitle) {
        return incidents[i];
      }
    }

    return {} as Incident;

  }


  async updateIncident(orgName: string, productObjective: string, productStep: string, incident: Incident) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'incident', productStep);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //get the incidents array
      // @ts-ignore
      let dataIncident = data.incidents;
      console.log(dataIncident);
      for (let i = 0; i <= dataIncident.length; i++) {
        console.log(dataIncident[i].title);
        console.log(incident.title);
        if (dataIncident[i].title === incident.title) {
          console.log('found');
          dataIncident[i] = incident;
          await setDoc(docRef, data);
          return true;
        }
      }
    }
    return false;
  }

  async closeIncident(orgName: string, productObjective: string, productStep: string, incident: Incident) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'incident', productStep);
    incident.state = 'closed'
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //get the incidents array
      // @ts-ignore
      let dataIncident = data.incidents;
      console.log(dataIncident);
      for (let i = 0; i <= dataIncident.length; i++) {
        console.log(dataIncident[i].title);
        console.log(incident.title);
        if (dataIncident[i].title === incident.title) {
          console.log('found');
          dataIncident[i] = incident;
          await setDoc(docRef, data);
          return true;
        }
      }
    }
    return false;
}




}
