import { Injectable } from '@angular/core';
import {SystemTest} from "../../interfaces/system-test";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {IntegrationTest} from "../../interfaces/integration-test";

@Injectable({
  providedIn: 'root'
})
export class IntegrationTestService {

  constructor(
    private firestore: Firestore,
  ) { }


  async addSystemTest(orgName: string, productObjective: string, productStep: string, integrationTest: IntegrationTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'integration_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();

      if (!data[productStep]) {
        data[productStep] = [integrationTest];
        await setDoc(docRef, data);
        console.log('Document created with ID: ', docRef.id);
        return;
      }

      //add to the array
      data[productStep].push(integrationTest);
      await setDoc(docRef, data);
      console.log('Document updated with ID: ', docSnap.id);


    } else {
      console.log('No such document!');
      //create the document
      await setDoc(docRef, { [productStep]: [integrationTest] });
      console.log('Document created with ID: ', docRef.id);
    }
    return;

  }


  async getIntegrationTests(orgName: string, productObjective: string, productStep: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'integration_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data[productStep];
    }
    return [];
  }

  async updateIntegrationTestState(orgName: string, productObjective: string, productStep: string, title: string, state: boolean) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'integration_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let i = 0; i < data[productStep].length; i++) {
        if (data[productStep][i].title === title) {
          data[productStep][i].state = state;

          const date = new Date();
          let srtDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
          const last_state_change = {
            date: srtDate,
            state: data[productStep][i].state
          }


          data[productStep][i].last_state_change = [...data[productStep][i].last_state_change, last_state_change];
          await setDoc(docRef, data);

          return true;
        }
      }
    }
    return false;
  }

  async deleteIntegrationTest(orgName: string, productObjective: string, productStep: string, integrationTest: IntegrationTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'integration_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let i = 0; i < data[productStep].length; i++) {
        if (data[productStep][i].title === integrationTest.title) {
          data[productStep].splice(i, 1);
          await setDoc(docRef, data);
          return true;
        }
      }
    }
    return false;
  }


  async getIntegrationTestHistory(orgName: string, productObjective: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'integration_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    }
    return {};
  }


}
