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
    this.closeIncidents = this.closeIncidents.filter(incident => incident.state === 'closed');
  }


  async navigateToNewIncident() {
    await this.router.navigate(['/new-incident', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }


  async goToIncident(incident: Incident) {
    await this.router.navigate(['incident-details', {
      productObjective: this.productObjective,
      step: this.productStep,
      incident: JSON.stringify(incident)
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

}
