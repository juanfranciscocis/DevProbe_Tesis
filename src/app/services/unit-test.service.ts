import { Injectable } from '@angular/core';
import {SystemTest} from "../interfaces/system-test";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {UnitTest} from "../interfaces/unit-test";

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
      //add to the array
      const arr = data[productStep] //get the array
      console.log(arr);
      arr.push(unitTest); //add the new system test
      await setDoc(docRef, { [productStep]: arr }); //update the array key:productStep with the new array
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

  async updateUnitTestState(orgName: string, productObjective: string, productStep: string, title: string) {
    const docRef = doc(this.firestore, 'teams', orgName, 'products', productObjective, 'software_testing', 'unit_tests');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
      const data = docSnap.data();
      const arr = data[productStep];
      for (let i = 0; i < arr.length; i++){
        if (arr[i].title === title){
          arr[i].state = !arr[i].state;

          const date = new Date();
          const srtDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

          arr[i]. last_state_change.push({
            date: srtDate,
            state: arr[i].state
          });
          await setDoc(docRef, { [productStep]: arr });
          return true;
        }
      }
    }
    return false;
  }
}
