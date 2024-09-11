import { Injectable } from '@angular/core';
import {SystemTest} from "../../interfaces/system-test";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {UnitTest} from "../../interfaces/unit-test";

@Injectable({
  providedIn: 'root'
})
export class UnitTestService {

  constructor(
    private firestore: Firestore,
  ) { }

  async addUnitTest(orgName: string, productObjective: string, productStep: string, unitTest: UnitTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      if (!data[productStep]) {
        //there is data add a new key with the array
        data[productStep] = [unitTest];
        await setDoc(docRef, data);
        console.log('Document created with ID: ', docRef.id);
        return;
      }

      //if there is a unit test with the same title, return
      for (let i = 0; i < data[productStep].length; i++){
        if (data[productStep][i].title === unitTest.title){
          return;
        }
      }

      //add to the array
      data[productStep].push(unitTest); //add the new system test
      await setDoc(docRef, data);
      console.log('Document updated with ID: ', docSnap.id);
    } else {
      console.log('No such document!');
      //create the document
      await setDoc(docRef, { [productStep]: [unitTest] });
      console.log('Document created with ID: ', docRef.id);
    }
    return;

  }

  async getUnitTests(orgName: string, productObjective: string, productStep: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data[productStep];
    }
    return [];
  }

  async updateUnitTestState(orgName: string, productObjective: string, productStep: string, title: string, state: boolean) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      const data = docSnap.data();
      for (let i = 0; i < data[productStep].length; i++){
        if (data[productStep][i].title === title){
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

  async deleteUnitTest(orgName: string, productObjective: string, productStep: string, unitTest: UnitTest) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      for (let i = 0; i < data[productStep].length; i++) {
        if (data[productStep][i].title === unitTest.title) {
          data[productStep].splice(i, 1);
          await setDoc(docRef, data);
          return true;
        }
      }
    }
    return false;
  }

  async getUnitTestHistory(orgName: string, productObjective: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    }
    return {};
  }
}
