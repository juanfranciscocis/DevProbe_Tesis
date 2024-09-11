import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {SystemTest} from "../../interfaces/system-test";
import {get} from "@angular/fire/database";
import {Product} from "../../interfaces/product";

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

      if (!data[productStep]) {
        data[productStep] = [systemTest];
        await setDoc(docRef, data);
        console.log('Document created with ID: ', docRef.id);
        return;
      }

      //add to the array
      data[productStep].push(systemTest);
      await setDoc(docRef, data);
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
    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.log(timestamp);

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

  async getSystemTestHistoryByTitle(orgName: string, productObjective: string, productStep: string, testTitle: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    const docSnap = await getDoc(docRef);
    let result = [];
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let key in data) {
        if (data[key].systemTest.title === testTitle && data[key].productStep === productStep) {
          result.push({timestamp: key, systemTest: data[key].systemTest});
        }
      }
    }
    return result;
  }

  async getSystemTestByTimestamp(orgName: string, productObjective: string, productStep: string, testTitle: string, timestamp: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let key in data) {
        if (data[key].systemTest.title === testTitle && key === timestamp && data[key].productStep === productStep) {
          return data[key].systemTest;
        }
      }
    }
    return {};
    }

  async deleteSystemTestHistoryByKey(orgName: string, productObjective: string, productStep: string, testTitle: string, timestamp: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'system_tests_history');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let key in data) {
        if (data[key].systemTest.title === testTitle && key === timestamp && data[key].productStep === productStep) {
          delete data[key];
        }
      }
      await setDoc(docRef, data);
    }
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
      data[productStep] = data[productStep].filter((test: { title: string; }) => test.title !== systemTest.title);
      await setDoc(docRef, data);
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
