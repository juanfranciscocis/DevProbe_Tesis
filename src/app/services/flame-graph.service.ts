import { Injectable } from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {Product} from "../interfaces/product";
import {DocumentData} from "@angular/fire/compat/firestore";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlameGraphService {

  url_cpu:string = 'https://devprobeapi.onrender.com/flame_graph_date';
  url_mem:string = 'https://devprobeapi.onrender.com/flame_graph_memory_date';



  constructor(
    private firestore: Firestore,
    private http: HttpClient,
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

  async getDates(orgName: string, productObjective: string, usage_type?: string | null | undefined) {
    try {
      if (!usage_type){
        usage_type = 'cpu_usage';
      }
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, usage_type);
      const dates = await getDocs(collectionRef);
      return dates.docs.map(doc => doc.id);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  // @ts-ignore
  async getFlameGraphByDate(orgName: string, productObjective: string, date: string, isUsageMemory?:boolean) {
    try {
      let body = {
        "team": orgName,
        "product": productObjective,
        "date": date
      }
      //Get the flame graph
      if (isUsageMemory){
        const res = await this.http.post(this.url_mem, body).toPromise();
        return res;
      }
      const res =    await this.http.post(this.url_cpu, body).toPromise();
      return res;

    }catch (e) {
      return {};
    }
  }
















}
