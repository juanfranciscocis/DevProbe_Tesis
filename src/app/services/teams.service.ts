import { Injectable } from '@angular/core';
import {deleteDoc, doc, Firestore, getDoc, setDoc, updateDoc} from "@angular/fire/firestore";
import {Members} from "../interfaces/members";
import {User} from "../interfaces/user";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }


  async getTeamByOrganization(orgName: string):Promise<User[]> {
    let ref = doc(this.firestore, "teams", orgName); // teams/organizationName
    const fetchOrg = await getDoc(ref);

    //for each team, get the members
    const teamMembers = fetchOrg.data();
    const members:Members = teamMembers as Members;

    let users: User[] = [];

    //for each member, get the user data
    for (let i = 0; i < members.members.length; i++) {
      ref = doc(this.firestore, "users", members.members[i]); // users/userId
      const fetchUser = await getDoc(ref);
      const user = fetchUser.data();
      users.push(user as User);
    }
      return users;
  }


  async removeMember(orgName: string, memberUID: string):Promise<boolean> {
    try {

      let ref = doc(this.firestore, "teams", orgName); // teams/organizationName
      const fetchOrg = await getDoc(ref);

      //for each team, get the members
      const teamMembers = fetchOrg.data();
      const members:Members = teamMembers as Members;

      let newMembers = members.members.filter(member => member !== memberUID);

      await setDoc(ref, {
        name: members.name,
        members: newMembers
      });

      //delete the user from the users collection
      ref = doc(this.firestore, "users", memberUID);
      await setDoc(ref, {}); // delete the user document


      //delete the user from the auth collection
      const user = await this.authService

      return true;
    } catch (error) {
      return false;
    }
  }

  async addMember(user:User):Promise<string | boolean> {

    try {


      //register the user as a member
      const success = await this.authService.addMember(user);
      if (!success) {
        return false;
      }

      //Add the user to the team
      const ref = doc(this.firestore, 'teams', user.orgName!);
      const fetchOrg = await getDoc(ref);
      const teamMembers = fetchOrg.data();
      console.log(teamMembers);
      const members:Members = teamMembers as Members;

      let newMembers = members.members;
      newMembers.push(success.uid!);

      console.log(newMembers);
      await updateDoc(ref, {
        name: members.name,
        members: newMembers
      });


      return success.uid as string;
    } catch (error) {
      return false;
    }
  }












}
