import { Injectable } from '@angular/core';
import {Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {User} from "../interfaces/user";
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";

/**
 * AuthService is a service that provides methods for user authentication.
 * It uses Firebase's Auth module for user registration and login.
 * It also uses Firestore for storing user data.
 *
 * @Injectable marks it as a service that can be injected into other components.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * AuthService constructor.
   *
   * @param {Auth} auth - The Firebase Auth instance.
   * @param {Firestore} firestore - The Firestore instance.
   */
  constructor(
    private auth:Auth,
    private firestore:Firestore
  ) {
  }

  /**
   * Register a new user with email and password.
   * It also saves the user data to Firestore and creates a new team where the user is the owner.
   *
   * @param {User} user - The user to register. Must contain 'email', 'password', 'name', and 'orgName' fields.
   * @returns {Promise<UserCredential | null>} - A promise that resolves to the user credential data for the newly registered user, or null if registration fails.
   */
  async registerUser(user: User): Promise<UserCredential | null> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, user.email, user.password);

      if (!userCredential.user) {
        return null;
      }

      // Save user data to Firestore
      await setDoc(doc(this.firestore, 'users', userCredential.user.uid), {
        email: user.email,
        name: user.name,
        orgName: user.orgName,
        uid: userCredential.user.uid
      });

      //Create a new Team where the user is the owner
      await setDoc(doc(this.firestore, 'teams', `${user.orgName}`), {
        name: user.orgName,
        members: [user.email]
      });

      return userCredential;
    } catch (error) {
      return null;
    }
  }

  /**
   * Login a user with email and password.
   * If the user is logged in, it retrieves the user data from Firestore and saves it to the local storage.
   *
   * @param {User} user - The user to login. Must contain 'email' and 'password' fields.
   * @returns {Promise<UserCredential | null>} - A promise that resolves to the user credential data for the logged in user, or null if login fails.
   */
async loginUser(user:User):Promise<UserCredential | null>{
  try {
    const logged = await signInWithEmailAndPassword(this.auth, user.email, user.password);
    if(logged.user?.uid){
      const userDoc = await getDoc(doc(this.firestore, 'users', logged.user.uid));
      if(userDoc.exists()){
        localStorage.setItem('user', JSON.stringify(userDoc.data()));
        return logged;
      }
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

  //TODO: Implement the following methods
  /**
   * Logout the current user.
   */
  async logoutUser():Promise<void>{
    await this.auth.signOut();
  }

  /**
   * Add a new member to the team.
   */

}
