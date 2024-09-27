import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private firestore: Firestore,
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



}
