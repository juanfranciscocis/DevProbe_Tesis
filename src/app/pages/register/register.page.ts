import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {AuthService} from "../../services/auth.service";
import {AlertController, NavController} from "@ionic/angular";

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
  constructor(
    private authService:AuthService,
    private alertCtrl:AlertController,
    private navCtrl:NavController
  ) { }

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
        // Redirect to the login page
        await this.navCtrl.navigateRoot('/login')
        await this.showAlert("User registered successfully! Please Login.","Registration Successful");

      }else{
        console.log("There was an error registering the user");
        await this.showAlert("Registration failed. Please check the form data.");
      }
    }else{
      console.log("Please enter your email and password");
      await this.showAlert("Please enter all the required fields.");
    }
  }

  /**
   * Show an alert with the given message.
   *
   * @param {string} header - The header of the alert. Defaults to 'Registration Failed!'.
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string,header?:string) {
    const alert = await this.alertCtrl.create({
      header: header || 'Registration Failed!',
      message:message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
