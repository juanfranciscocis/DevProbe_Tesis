import {Component, Input, OnInit} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {User} from "../../interfaces/user";
import {Members} from "../../interfaces/members";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.page.html',
  styleUrls: ['./myteam.page.scss'],
})
export class MyteamPage implements OnInit {

  members: User[] = [];
  orgName: string = '';


  @Input() teamMemberName: string = '';
  @Input() teamMemberEmail: string = '';
  @Input() teamMemberPassword: string = '';




  constructor(
    private teamsService: TeamsService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  async ngOnInit() {
    await this.getTeam();
  }


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
