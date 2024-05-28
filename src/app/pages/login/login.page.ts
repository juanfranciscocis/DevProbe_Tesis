import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /**
   * Email input field.
   * @Input decorator to bind this property with a parent component.
   */
  @Input() email:string="";

  /**
   * Password input field.
   * @Input decorator to bind this property with a parent component.
   */
  @Input() password:string="";

  /**
   * LoginPage constructor.
   */
  constructor() { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit() {
  }

  /**
   * Login a user.
   * If all the fields are filled, it creates a new user object and calls the loginUser method.
   * If the login is successful, it logs "User logged in successfully!".
   * If there is an error, it logs "There was an error logging in the user".
   * If not all the fields are filled, it logs "Please enter your email and password".
   */
  loginUser() {

  }
}
