import { Injectable } from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
import {Product} from "../interfaces/product";
import {DocumentData} from "@angular/fire/compat/firestore";
import {HttpClient} from "@angular/common/http";
import {RenderRestartService} from "./render-restart.service";

@Injectable({
  providedIn: 'root'
})
export class FlameGraphService {

  url:string = 'https://cors-ea3m.onrender.com/https://devprobeapi.onrender.com/flame_graph_date';
  hasRestarted = false;



  constructor(
    private firestore: Firestore,
    private http: HttpClient,
    private renderRestartService:RenderRestartService,
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

  async getDates(orgName: string, productObjective: string) {
    try {
      const collectionRef = collection(this.firestore, 'teams', orgName, 'products', productObjective, 'cpu_usage');
      const dates = await getDocs(collectionRef);
      return dates.docs.map(doc => doc.id);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  // @ts-ignore
  async getFlameGraphByDate(orgName: string, productObjective: string, date: string) {
    try {
      let body = {
        "team": orgName,
        "product": productObjective,
        "date": date
      }
      //Get the flame graph
      const res =    await this.http.post(this.url, body).toPromise();
      return res;

    }catch (e) {
      console.log("Error", e);

      if (!this.hasRestarted) {
        await this.renderRestartService.restartService();
      }
      this.hasRestarted = true;
      // @ts-ignore
      if (e.status === 503) {
        //wait for 5 seconds and retry
        await new Promise(resolve => setTimeout(resolve, 5000));
        return await this.getFlameGraphByDate(orgName, productObjective, date);
      }
      return {};
    }
  }
















}
