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

}
