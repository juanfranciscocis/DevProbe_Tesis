import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {Incident} from "../../../interfaces/incident";
import {IncidentService} from "../../../services/incident.service";

@Component({
  selector: 'app-incident-manager',
  templateUrl: './incident-manager.page.html',
  styleUrls: ['./incident-manager.page.scss'],
})
export class IncidentManagerPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';



  openIncidents:Incident[] = [];
  closeIncidents:Incident[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private incidentService: IncidentService,
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.showLoading();
    this.getParams();
    await this.getOpenIncidents();
    await this.closeIncident();
    await this.getMyOpenIncidents();
    await this.getMyClosedIncidents();
    await this.hideLoading();
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
  }


  async getOpenIncidents() {
    //get only status=open
    this.openIncidents = await this.incidentService.getIncidents(this.orgName, this.productObjective, this.productStep );
    this.openIncidents = this.openIncidents.filter(incident => incident.state === 'open');
  }

  async closeIncident() {
    this.closeIncidents = await this.incidentService.getIncidents(this.orgName, this.productObjective, this.productStep );
    this.closeIncidents = this.closeIncidents.filter(incident => incident.state === 'closed' || incident.state === 'postmortem');
  }


  async getMyOpenIncidents() {
    const user = JSON.parse(localStorage.getItem('user')!);
    for (let i = 0; i < this.openIncidents.length; i++) {
      if (user.name === this.openIncidents[i].incidentCommander || user.name === this.openIncidents[i].operations_lead || user.name === this.openIncidents[i].communications_lead) {
        this.openIncidents[i].iAmIn = true;
      }
        for (let j =0 ; j < this.openIncidents[i].operation_team.length; j++) {
          console.log(this.openIncidents[i].operation_team[j]);
          if (user.name === this.openIncidents[i].operation_team[j]) {
            this.openIncidents[i].iAmIn = true;
          }
          console.log("Team ", j, this.openIncidents[i].operation_team[j]);
        }
    }
    console.log('My Open Incidents')
  }

  async getMyClosedIncidents() {
    const user = JSON.parse(localStorage.getItem('user')!);
    for (let i = 0; i < this.closeIncidents.length; i++) {
      if (user.name === this.closeIncidents[i].incidentCommander || user.name === this.closeIncidents[i].operations_lead || user.name === this.closeIncidents[i].communications_lead) {
        this.closeIncidents[i].iAmIn = true;
      }
        for (let j =0 ; j < this.closeIncidents[i].operation_team.length; j++) {
          console.log(this.closeIncidents[i].operation_team[j]);
          if (user.name === this.closeIncidents[i].operation_team[j]) {
            this.closeIncidents[i].iAmIn = true;
          }
          console.log("Team ", j, this.closeIncidents[i].operation_team[j]);
        }
    }
    console.log('My Closed Incidents')
  }


  async navigateToNewIncident() {
    await this.router.navigate(['/new-incident', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }


  async goToIncident(incident: Incident) {
    await this.router.navigate(['incident-details', {
      orgName: this.orgName,
      productObjective: this.productObjective,
      step: this.productStep,
      incidentTitle: incident.title
    }]);
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

  goToPostmortem(incident: Incident) {
    this.router.navigate(['incident-postmortem', {
      productObjective: this.productObjective,
      step: this.productStep,
      incidentTitle: incident.title
    }]);
  }
}
