import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
import {HttpClient} from "@angular/common/http";
import {GitSyncData} from "../interfaces/git-sync-data";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url: string = 'https://devprobeapi.onrender.com/';

  constructor(
    private firestore:Firestore,
    private httpClient:HttpClient
  ) { }

  async syncRepo(orgName:string,gitKey: string, repoName: string, branchName: string, owner: string) {
    const docRef = doc(this.firestore, 'teams', orgName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      data['gitHub'] = {
        key: gitKey,
        repo: repoName,
        branch: branchName,
        owner: owner
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


  async getFiles(gitHubData: GitSyncData) {

    const files = await this.httpClient.post(this.url + 'github_repo', {
      auth: gitHubData.key,
      repo: gitHubData.repo,
      branch: gitHubData.branch,
      owner: gitHubData.owner
    }).toPromise();
    console.log(files);

    if (files) {
      // @ts-ignore
      let data =  files['paths'] as string[];

      //delete the .git folder
      data = data.filter(path => !path.includes('.git'));
      //delete the node_modules folder
      data = data.filter(path => !path.includes('node_modules'));
      //delete the .idea folder
      data = data.filter(path => !path.includes('.idea'));
      //delete paths with no extension
      data = data.filter(path => path.includes('.'));
      return data;
    }

    return [];
  }

  async getContentFromFilePath(gitHubData: GitSyncData, path: string) {

    const file = await this.httpClient.post(this.url + 'github_file', {
      auth: gitHubData.key,
      repo: gitHubData.repo,
      owner: gitHubData.owner,
      path: path,
    }).toPromise();
    console.log(file);

    if (file) {
      // @ts-ignore
      return file['content'] as string;
    }

    return '';

  }


}
