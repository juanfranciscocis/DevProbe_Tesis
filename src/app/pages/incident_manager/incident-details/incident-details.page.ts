import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {IncidentService} from "../../../services/incident.service";
import {Incident} from "../../../interfaces/incident";
import {User} from "../../../interfaces/user";
import {NotificationService} from "../../../services/notification.service";

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
    private notificationService: NotificationService,
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

  async addComment() {

    await this.showLoading();
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
    await this.incidentService.updateIncident(this.orgName, this.productObjective, this.productStep, this.incident);


    interface Role {
      role: string;
      member: string;
    }

    let consolidateMember: Role[] = [];
    consolidateMember.push({role: 'Incident Commander', member: this.incident.incidentCommander});
    consolidateMember.push({role: 'Communications Lead', member: this.incident.communications_lead});
    consolidateMember.push({role: 'Operations Lead', member: this.incident.operations_lead});
    for (let i = 0; i < this.incident.operation_team.length; i++) {
      consolidateMember.push({role: 'Operations Team Member', member: this.incident.operation_team[i]});
    }
    console.log(consolidateMember);
    await this.notificationService.notifyIncidentUpdateToTeam(consolidateMember, this.orgName);


    this.newComment = '';

    this.hideLoading();


  }

  closeIncident() {

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
