import { Injectable } from '@angular/core';
import {collection, Firestore, getDocs} from "@angular/fire/firestore";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class FlameGraphService {

  constructor(
    private firestore: Firestore
  ) { }

  async getProducts(orgName:string){
    try {
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products');
      const products = await getDocs(collectionRef);
      return products.docs.map(doc => doc.data() as Product);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getDates(orgName:string, productObjective:string){
    try {
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, 'cpu_usage');
      const dates = await getDocs(collectionRef);
      return dates.docs.map(doc => doc.id as string);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
















}
