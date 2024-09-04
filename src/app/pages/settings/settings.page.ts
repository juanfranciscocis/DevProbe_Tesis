import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  gitKey: string = '';
  repoName: string = '';
  branchName: string = '';

  constructor(
    private authService:AuthService,
    private router:Router,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logoutUser();
    await this.router.navigate(['/login']);
  }

  async syncRepo() {
    if (!this.gitKey || !this.repoName || !this.branchName || this.gitKey === '' || this.repoName === '' || this.branchName === '') {
      await this.showAlert('Please fill in all fields', 'Error');
      return;
    }
  }

  /**
   * Show an alert with the given message.
   *
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string, header:string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message:message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
