import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {AuthService} from "../../services/auth.service";

/**
 * RegisterPage is a component that provides the user registration functionality.
 * It uses the AuthService for user registration.
 *
 * @Component is a decorator that marks a class as an Angular component and provides configuration metadata.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  /**
   * User's name input field.
   * @Input decorator to bind this property with a parent component.
   */
  @Input() name: string = "";

  /**
   * Organization name input field.
   * @Input decorator to bind this property with a parent component.
   */
  @Input() orgName: string = "";

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
   * RegisterPage constructor.
   *
   * @param {AuthService} authService - The AuthService instance.
   */
  constructor(private authService:AuthService) { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit() {
  }

  /**
   * Register a new user.
   * If all the fields are filled, it creates a new user object and calls the registerUser method from AuthService.
   * If the registration is successful, it logs "User registered successfully!".
   * If there is an error, it logs "There was an error registering the user".
   * If not all the fields are filled, it logs "Please enter your email and password".
   */
  registerUser = async () => {
    if(this.email && this.password && this.name && this.orgName){
      const user:User = {
        name: this.name,
        orgName: this.orgName,
        email: this.email,
        password: this.password,
      }
      const result = await this.authService.registerUser(user);
      if(result){
        console.log("User registered successfully!");
      }else{
        console.log("There was an error registering the user");
      }
    }else{
      console.log("Please enter your email and password");
    }
  }
}
