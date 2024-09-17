import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ArtilleryData} from "../../../classes/artillery-data";

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.page.html',
  styleUrls: ['./load-test.page.scss'],
})
export class LoadTestPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';



  target: string = '';
  description: string = '';

  loadTestResults: ArtilleryData = {}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadTestService: LoadTestService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getParams();
    await this.getHistoryResults().then(() => {
      this.byCodes();
    });
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


  async getHistoryResults() {
    await this.showLoading();
    await this.loadTestService.getLoadTestHistory(this.orgName, this.productObjective, this.productStep).then((data) => {
      this.loadTestResults = data as ArtilleryData;
      console.log(this.loadTestResults);
    });
    await this.hideLoading();
  }


  async sendRequest() {
    await this.showLoading();

    //Check if host input starts with http or https or finishes with a slash
    if ( this.target.startsWith('http://') ||  this.target.startsWith('https://') || this.target.endsWith('/')) {
      await this.hideLoading();
      await this.showAlert('No http or https is needed, check for slashes at the end of the domain', 'Please enter a valid host');
      return;
    }

    await this.loadTestService.sendLoadTest(this.orgName, this.productObjective, this.productStep, this.target).then(async (data) => {
      await this.hideLoading();
      console.log("data",data);
      if (data) {
        await this.showAlert('Test sent, please wait a few seconds to GET RESULTS', 'Success');
      }
    });
    await this.hideLoading();
  }


  byCodes(){
    let keys = Object.keys(this.loadTestResults);

    let codes = {};

    for (let key of keys) {
      // @ts-ignore
      let data = this.loadTestResults[key].aggregate.counters;
      // @ts-ignore
      let date = this.loadTestResults[key].date;
      //get all keys that start with http.codes.
      let keys = Object.keys(data);


      for (let keyCode of keys) {
        if (keyCode.startsWith('http.codes.')) {
        // @ts-ignore
          if (!codes[date]) {
          // @ts-ignore
            codes[date] = {};
        }
          // @ts-ignore
          codes[date][keyCode] = data[keyCode];
      }
        }
      }

    console.log(codes);

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

    const {role} = await alert.onDidDismiss();
    if (role === 'ok') {
      return true;
    }
    return true;
  }


}
