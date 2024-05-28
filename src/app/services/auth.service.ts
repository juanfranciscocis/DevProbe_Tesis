import { Injectable } from '@angular/core';
import {Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {User} from "../interfaces/user";

/**
 * AuthService is a service that provides methods for user authentication.
 * It uses Firebase's Auth module for user registration and login.
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
   */
  constructor(private auth:Auth) {
  }

  /**
   * Register a new user with email and password.
   *
   * @param {User} user - The user to register. Must contain 'email' and 'password' fields.
   * @returns {Promise<UserCredential | null>} - A promise that resolves to the user credential data for the newly registered user, or null if registration fails.
   */
  async registerUser(user:User):Promise<UserCredential | null>{
    try {
      return await createUserWithEmailAndPassword(this.auth, user.email, user.password);
    } catch (error) {
      return null;
    }
  }

  /**
   * Login a user with email and password.
   *
   * @param {User} user - The user to login. Must contain 'email' and 'password' fields.
   * @returns {Promise<UserCredential | null>} - A promise that resolves to the user credential data for the logged in user, or null if login fails.
   */
  async loginUser(user:User):Promise<UserCredential | null>{
    try {
      return await signInWithEmailAndPassword(this.auth, user.email, user.password);
    } catch (error) {
      return null;
    }
  }
}
