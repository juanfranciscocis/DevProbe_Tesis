import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";
import {GithubService} from "../../services/github.service";
import {User} from "../../interfaces/user";
import {GitSyncData} from "../../interfaces/git-sync-data";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  gitKey: string = '';
  repoName: string = '';
  branchName: string = '';

  user: User = {};
  orgname: string = '';

  constructor(
    private authService:AuthService,
    private router:Router,
    private alertCtrl:AlertController,
    private githubService: GithubService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    //Get User
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    if (!this.user) {
      await this.showAlert('No user found', 'Error');
      return;
    }

    this.orgname = this.user.orgName || '';

    await this.getSyncRepo();
  }

  async logout() {
    await this.authService.logoutUser();
    await this.router.navigate(['/login']);
  }

  async getSyncRepo() {
    await this.showLoading();

    const gitSyncData:GitSyncData =  await this.githubService.getSyncRepo(this.orgname);
    if (gitSyncData) {
      this.gitKey = gitSyncData.key;
      this.repoName = gitSyncData.repo;
      this.branchName = gitSyncData.branch;
    }

    await this.hideLoading();
  }

  async syncRepo() {
    await this.showLoading();
    if (!this.gitKey || !this.repoName || !this.branchName || this.gitKey === '' || this.repoName === '' || this.branchName === '') {
      await this.showAlert('Please fill in all fields', 'Error');
      return;
    }

    await this.githubService.syncRepo(this.orgname, this.gitKey, this.repoName, this.branchName);

    await this.hideLoading();

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