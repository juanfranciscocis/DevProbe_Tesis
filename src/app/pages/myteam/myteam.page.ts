import {Component, Input, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {User} from "../../interfaces/user";
import {Members} from "../../interfaces/members";
import {AlertController, LoadingController} from "@ionic/angular";
/**
 * MyteamPage is a component that manages the team page of the application.
 * It provides methods for getting the team, adding a member, and removing a member.
 * It uses TeamsService for team management, LoadingController for loading spinner, and AlertController for alerts.
 *
 * @Component is a decorator that marks a class as an Angular component, providing additional metadata that determines how the component should be processed, instantiated and used at runtime.
 */
@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.page.html',
  styleUrls: ['./myteam.page.scss'],
})
export class MyteamPage implements OnInit {

  /**
   * Array of User objects representing the members of the team.
   */
  members: User[] = [];

  /**
   * Organization name.
   */
  orgName: string = '';


  /**
   * Team member name input field.
   * @Input decorator to bind this property with a parent component.
   */
  @Input() teamMemberName: string = '';

  /**
   * Team member email input field.
   */
  @Input() teamMemberEmail: string = '';

  /**
   * Team member password input field.
   */
  @Input() teamMemberPassword: string = '';


  /**
   * MyteamPage constructor.
   * It initializes TeamsService, LoadingController, and AlertController instances.
   *
   * @param teamsService - An instance of TeamsService.
   * @param loadingCtrl - An instance of LoadingController.
   * @param alertCtrl - An instance of AlertController.
   */
  constructor(
    private teamsService: TeamsService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }
  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  async ngOnInit() {
    await this.getTeam();
  }

  /**
   * This method retrieves the team and updates the members and orgName properties.
   */
  async getTeam() {
    await this.showLoading()
    const userString = localStorage.getItem('user');

    if (!userString) {
      return;
    }

    const user: User = JSON.parse(userString);

    const team = await this.teamsService.getTeamByOrganization(user.orgName!);
    this.orgName = user.orgName!;
    if (team) {
      this.members = team;
    }

    await this.hideLoading();
  }

  /**
   * This method removes a member from the team.
   *
   * @param id - The UID of the member to be removed.
   */
  async removeMember(id: string) {
    await this.showLoading();
    const success = await this.teamsService.removeMember(this.orgName, id);
    if (success) {
      this.members = this.members.filter(member => member.uid !== id);
    }else {
      await this.showAlert('There was an error removing the member');
    }
    await this.hideLoading();
  }

  /**
   * This method adds a member to the team.
   */
  async addMember() {
    await this.showLoading();
    const user: User = {
      name: this.teamMemberName,
      email: this.teamMemberEmail,
      password: this.teamMemberPassword,
      orgName: this.orgName
    };

    if (!user.name || !user.email || !user.password) {
      await this.hideLoading();
      await this.showAlert('Please fill all the fields');
      return;
    }

    const success = await this.teamsService.addMember(user);
    if (typeof success === 'string') {
      user.uid = success;
      this.members.push(user);
      this.teamMemberName = '';
      this.teamMemberEmail = '';
      this.teamMemberPassword = '';
    }else {
      await this.showAlert('There was an error adding the member');
    }
    await this.hideLoading();
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
