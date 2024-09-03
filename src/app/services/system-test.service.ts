import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {SystemTest} from "../interfaces/system-test";
import {get} from "@angular/fire/database";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class SystemTestService {

  constructor(
    private firestore: Firestore,
  ) { }


  async addSystemTest(orgName: string, productObjective: string, productStep: string, systemTest: SystemTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //add to the array
      const arr = data[productStep] //get the array
      console.log(arr);
      arr.push(systemTest); //add the new system test
      await setDoc(docRef, { [productStep]: arr }); //update the array key:productStep with the new array
      console.log('Document updated with ID: ', docSnap.id);
    } else {
      console.log('No such document!');
      //create the document
      await setDoc(docRef, { [productStep]: [systemTest] });
      console.log('Document created with ID: ', docRef.id);
    }
    return;

  }

  async getSystemTest(orgName: string, productObjective: string, productStep: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data[productStep];
    }
    return [];
  }


  async saveSystemTest(orgName: string, productObjective: string, productStep: string, systemTest: SystemTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');

    // Get current date and time
    const now = new Date();
    const timestamp = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, { [timestamp]: {systemTest, productStep} });
    } else {
      let data = docSnap.data();
      data[timestamp] = {systemTest};
      data[timestamp].productStep = productStep;
      await setDoc(docRef, data);
    }
  }

  async getSystemTestHistoryByStep(orgName: string, productObjective: string, productStep: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();

      // Filter the data to only include the system tests for the specified product step
      const filteredData = Object.keys(data).filter(key => data[key].productStep === productStep).map(key => data[key].systemTest);

      return filteredData;
    }
    return [];
  }

  async getSystemTestHistory(orgName: string, productObjective: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    }
    return {};
  }

  async deleteSystemTest(orgName: string, productObjective: string, productStep: string, systemTest: SystemTest) {
    // Delete the system test from the system_tests collection
    let docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests');
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      let arr = data[productStep];
      let index = arr.indexOf(systemTest);
      arr.splice(index, 1);
      await setDoc(docRef, {[productStep]: arr});
    }

    // Delete the system test from the system_tests_history collection
    docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      for (let key in data) {
        console.log(data[key].systemTest.title);
        if (data[key].systemTest.title === systemTest.title) {
          delete data[key];
        }
      }
      await setDoc(docRef, data);
    }

  }

}
