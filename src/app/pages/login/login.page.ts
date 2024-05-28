import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";
import {AlertController, LoadingController, NavController} from "@ionic/angular";

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
  constructor(
    private authService:AuthService,
    private alertCtrl:AlertController,
    private navCtrl:NavController,
    private loadingCtrl:LoadingController
  ) { }

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
  loginUser = async () => {
    await this.showLoading();
    if(this.email && this.password){
      const user:User = {
        email: this.email,
        password: this.password
      }
      const userCredential = await this.authService.loginUser(user);
      if(userCredential){
        await this.hideLoading();
        // Redirect to the home page
        await this.navCtrl.navigateRoot('/home')
      } else {
        await this.hideLoading();
        await this.showAlert("Login failed. Please check your email and password.");
      }
    } else {
      await this.hideLoading();
      await this.showAlert("Please enter your email and password.");
    }
  }


  /**
   * Show an alert with the given message.
   *
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string) {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed!',
      message:message,
      buttons: ['OK']
    });
    await alert.present();
  }

  /**
   * Show a loading spinner.
   */
  async showLoading() {
    const loading = await this.loadingCtrl.create({
    });
    await loading.present();
  }

  /**
   * Hide the loading spinner.
   */
  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }

}
