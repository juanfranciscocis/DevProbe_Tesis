import { Injectable } from '@angular/core';
import {collection, deleteDoc, doc, Firestore, getDocs, setDoc} from "@angular/fire/firestore";
import {Product} from "../interfaces/product";
import {DocumentData, Query} from "@angular/fire/compat/firestore";
import {query} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private firestore: Firestore
  ) { }


  async addProduct(new_product:Product, orgName:string){
    try {
      //teams/orgName/products
      console.log(new_product);
      const collectionRef = doc(this.firestore, 'teams', orgName, 'products', new_product.productObjective!);
      await setDoc(collectionRef, new_product);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

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

  async removeProduct(orgName:string, productObjective:string){
    try {
      const collectionRef = doc(this.firestore, 'teams', orgName, 'products', productObjective);
      await deleteDoc(collectionRef);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }


}
