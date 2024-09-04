import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private firestore:Firestore,
    private httpClient:HttpClient
  ) { }

  async syncRepo(orgName:string,gitKey: string, repoName: string, branchName: string) {
    const docRef = doc(this.firestore, 'teams', orgName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      data['gitHub'] = {
        key: gitKey,
        repo: repoName,
        branch: branchName
      }
      await setDoc(docRef, data);
    }
  }

  async getSyncRepo(orgName:string) {
    const docRef = doc(this.firestore, 'teams', orgName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data['gitHub'];
    }
    return null;
  }



}
