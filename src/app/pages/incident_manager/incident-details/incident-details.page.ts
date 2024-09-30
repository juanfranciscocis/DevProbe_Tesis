import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {IncidentService} from "../../../services/incident.service";
import {Incident} from "../../../interfaces/incident";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.page.html',
  styleUrls: ['./incident-details.page.scss'],
})
export class IncidentDetailsPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';
  currentUser: String = '';
  incident: Incident = {} as Incident;


  newComment: String = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private incidentService: IncidentService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getParams();
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product
      this.incident = JSON.parse(params['incident']);
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;
    this.currentUser = user.name!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.incident.title);
  }

  addComment() {

  }

  closeIncident() {

  }
}
