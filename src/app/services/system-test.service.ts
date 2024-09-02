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





}
