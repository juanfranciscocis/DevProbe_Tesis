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
  currentUser: string = '';
  incident: Incident = {} as Incident;


  newComment: string = '';

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
    this.currentUser = user.name!  as string;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.incident.title);
  }

  addComment() {
    console.log('add comment');
    console.log(this.currentUser);
    console.log(this.newComment);

    if (this.newComment === '') {
      return;
    }

    //check if the incident has a report
    if (this.incident.report) {
      //add the comment to the report
      this.incident.report.push({
        comment: this.newComment.replace(/\n/g, '<br>'),
        from: this.currentUser,
      });
    } else {
      //create a new report
      this.incident.report = [{
        comment: this.newComment.replace(/\n/g, '<br>'),
        from: this.currentUser,
      }];
    }

    //save the incident to the db


    this.newComment = '';


  }

  closeIncident() {

  }
}
