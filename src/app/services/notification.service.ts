import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import {HttpClient} from "@angular/common/http";
import {TeamsService} from "./teams.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private firestore: Firestore,
    private http: HttpClient,
    private teamService: TeamsService,
  ) { }

  async saveNotificationID(user: User, id: string) {
    // @ts-ignore
    const docRef = doc(this.firestore, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //@ts-ignore
      data.notificationID = id;
      await setDoc(docRef, data);
      return true;
    } else {
      console.log('No such document!');
      return false;
    }
  }

  async getNotificationUser(user: User) {
    // @ts-ignore
    const docRef = doc(this.firestore, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //@ts-ignore
      if (data.notificationID) {
        //@ts-ignore
        return data.notificationID;
      } else {
        return '';
      }
      //@ts-ignore
    } else {
      console.log('No such document!');
      return null;
    }
  }

  async notifyIncidentToUser(users: String[], orgName: string) {

    try {


      //get team by orgName
      const team = await this.teamService.getTeamByOrganization(orgName);
      // from the team arr delete the users that are not in the users array
      const filteredTeam = team.filter(user => users.includes(<String>user.name));
      console.log('team',filteredTeam);

      const url = `https://devprobeapi.onrender.com/sendNotification`;
      for (let user of filteredTeam) {
        let sid = await this.getNotificationUser(user);
        console.log('sid',sid);
        if (sid !== '') {
          let target_url = `https://devprobe-89481.web.app/incident-manager-chooser`;
          const body = {
            sid: sid,
            title: 'New Incident',
            type: 'new_incident',
            message: `Hey ${user.name}, you have been assigned a new incident`,
            target: target_url
          };
          await this.http.post(url, body).toPromise();
          console.log('Notification sent successfully');
        }else{
          console.log('no sid');}}
    }catch (error) {
      console.log(error);
    }
    }
}

