import { Injectable } from '@angular/core';
import {deleteDoc, doc, Firestore, getDoc, setDoc, updateDoc} from "@angular/fire/firestore";
import {Members} from "../interfaces/members";
import {User} from "../interfaces/user";
import {AuthService} from "./auth.service";

/**
 * TeamsService is a service that provides methods for managing teams and their members.
 * It uses Firestore for data storage and retrieval.
 *
 * @Injectable is a decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  /**
   * TeamsService constructor.
   * It initializes Firestore and AuthService instances.
   *
   * @param firestore - An instance of Firestore.
   * @param authService - An instance of AuthService.
   */
  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  /**
   * This method retrieves a team by its organization name and returns its members.
   *
   * @param orgName - The name of the organization.
   * @returns A promise that resolves to an array of User objects.
   */
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

  /**
   * This method removes a member from a team.
   *
   * @param orgName - The name of the organization.
   * @param memberUID - The UID of the member to be removed.
   * @returns A promise that resolves to a boolean indicating the success of the operation.
   */
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

  /**
   * This method adds a member to a team.
   *
   * @param user - The User object representing the member to be added.
   * @returns A promise that resolves to a string representing the UID of the added member, or a boolean indicating the success of the operation.
   */
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
