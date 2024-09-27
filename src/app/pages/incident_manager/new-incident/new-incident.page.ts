import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";
import {TeamsService} from "../../../services/teams.service";
import {User} from "../../../interfaces/user";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {IncidentService} from "../../../services/incident.service";

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.page.html',
  styleUrls: ['./new-incident.page.scss'],
})
export class NewIncidentPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';


  teamMembers: User[] = [];


  incidentCommander: string = '';
  operationsLead: string = '';
  communicationsLead: string = '';
  disableAssignee: boolean = false;
  operationTeam = [
    {
      name: 'Available Members',
      items: ['No Members Available']
    },
    {
      name: 'Assigned Members',
      items: ['No Members Assigned']
    },
  ];


  incidentTitle: string = '';
  incidentDescription: string = '';
  incidentUrgency: string = '';
  orgImpact: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private teamService: TeamsService,
    private alertCtrl: AlertController,
    private incidentService: IncidentService,
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.showLoading();
    this.getParams();
    await this.getAllTeamMembers();
    this.availableMembers();
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

  async getAllTeamMembers() {
    this.teamMembers = await this.teamService.getTeamByOrganization(this.orgName);
    console.log('Members',this.teamMembers);
  }








  onIncidentCommanderChange($event: any) {
    this.incidentCommander = $event.detail.value;
    console.log('Incident Commander',this.incidentCommander);
    this.availableMembers();
  }

  onCommunicationsLeadChange($event: any) {
    this.communicationsLead = $event.detail.value;
    console.log('Communications Lead',this.communicationsLead);
    this.availableMembers();
  }


  onOperationsLeadChange($event: any) {
    this.operationsLead = $event.detail.value;
    console.log('Operations Lead',this.operationsLead);
    this.availableMembers();
  }
  availableMembers(){
    this.operationTeam[0].items = [];
    for (let i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i].name !== this.incidentCommander && this.teamMembers[i].name !== this.operationsLead && this.teamMembers[i].name !== this.communicationsLead) {
        // @ts-ignore
        this.operationTeam[0].items.push(this.teamMembers[i].name);
      }
    }
    console.log('Available Members',this.operationTeam);
  }
  async dropOperationMember(event: CdkDragDrop<string[]>) {

    if (this.incidentCommander === '' || this.operationsLead === '' || this.communicationsLead === '') {
      await this.showAlert('Please assign a Incident Commander and an Operations Lead and a Communications Lead before adding members', 'Error');
      return;
    }

    this.disableAssignee = true;


    if (this.operationTeam[0].items[0] === 'No Members Available') {
      this.operationTeam[0].items.shift();
    }
    if (this.operationTeam[1].items[0] === 'No Members Assigned') {
      this.operationTeam[1].items.shift();
    }


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); // move the item in the array
    } else { // transfer the item from one array to another
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }


    if (this.operationTeam[0].items.length === 0) {
      this.operationTeam[0].items.push('No Members Available');
    }

    if (this.operationTeam[1].items.length === 0) {
      this.operationTeam[1].items.push('No Members Assigned');
    }

  }


  async saveIncident() {


   if (this.incidentCommander === '' || this.operationsLead === '' || this.communicationsLead === '') {
      await this.showAlert('Please assign a Incident Commander and an Operations Lead and a Communications Lead before saving the incident', 'Error');
      return;
    }

    if (this.operationTeam[1].items[0] === 'No Members Assigned') {
      await this.showAlert('Please assign at least one member to the operations team', 'Error');
      return;
    }

    if (this.incidentTitle === '' || this.incidentDescription === '' || this.incidentUrgency === '' || this.orgImpact === '') {
      await this.showAlert('Please fill the incident title, description, urgency and org impact', 'Error');
      return;
    }

    await this.showLoading();

    //get current date
    let date = new Date();
    let srtDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    console.log(srtDate);

    await this.incidentService.saveIncident(this.orgName, this.productObjective, this.productStep, {
      title: this.incidentTitle,
      description: this.incidentDescription,
      urgency: this.incidentUrgency,
      org_impact: this.orgImpact,


      operations_lead: this.operationsLead,
      communications_lead: this.communicationsLead,
      operation_team: this.operationTeam[1].items,

      date: srtDate


    }).then(async (data) => {
      if (data) {
        await this.hideLoading();
        await this.showAlert('Incident saved successfully', 'Success');
        window.history.back();
      } else {
        await this.hideLoading();
        await this.showAlert('Error saving Incident', 'Error');
      }
    });

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
