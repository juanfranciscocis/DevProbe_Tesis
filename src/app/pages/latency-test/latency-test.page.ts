import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../services/ripe.service";
import {Ripe} from "../../interfaces/ripe";
import {User} from "../../interfaces/user";
import {AlertController, LoadingController} from "@ionic/angular";
import {LocationService} from "../../services/location.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-latency-test',
  templateUrl: './latency-test.page.html',
  styleUrls: ['./latency-test.page.scss'],
})
export class LatencyTestPage implements OnInit {

  user: User = {}
  orgName: string = '';
  productObjective:string = '';
  productStep:string = '';

  @Input() host: string = 'portfoliojuanfranciscocisneros.web.app';
  @Input() description: string = 'NEW IONIC';

  type: string = 'ping';

  ripeResults:Ripe[] = [];
  ripeHistoryResultsID:string[] = [];



  constructor(
    private ripeService: RipeService,
    private loadingCtrl: LoadingController,
    private locationService: LocationService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController,
  ) {

  }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.showLoading();
    // get url params
    this.route.params.subscribe(params => {

      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['step']; //this is the step of the product

      //Create a unique identifier for the test
      const currentdate = new Date();
      const datetime = currentdate.getDate() + "-"
        + (currentdate.getMonth() + 1) + "-"
        + currentdate.getFullYear() + "-"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
      this.description = params['productObjective'] + '-' + params['step'] + '-' + datetime; //this is a unique identifier for the test


    });

    // get user from local storage
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;

    // get history results for this product
    await this.getHistoryResults(this.orgName, this.productObjective);
    await this.hideLoading();

  }



  async sendRequest() {
    await this.showLoading();

    const isTest = await this.ripeService.sendMeasurementRequest(this.host, this.description, this.type);
    if (isTest !== false) {
      await this.hideLoading();
      await this.showAlert('Test sent, please wait a few minutes to GET RESULTS for ID: ' + isTest, 'Success');
    }else {
      await this.hideLoading();
      await this.showAlert('Test not sent', 'Error');
    }

  }


  async getResults() {

    await this.showLoading();

    this.ripeResults = [];

    try {
      let measurement = (await this.ripeService.getMeasurementResults());
      if (!measurement) {
        await this.hideLoading();
        await this.showAlert('Please send a test first', 'Error');
        return;
      }

      measurement.subscribe(async (data) => {

        if (data.length === 0) {
          await this.hideLoading();
          await this.showAlert('No data found yet', 'Please wait a few minutes and try again');
          return;
        }

        for (let i = 0; i < data.length; i++) {
          let ripe: Ripe = {
            latency: data[i].avg,
            dst_addr: data[i].dst_addr,
            from: data[i].from,
            toLatitude: 0,
            toLongitude: 0,
            fromLatitude: 0,
            fromLongitude: 0,
            cityTo: '',
            countryTo: '',
            cityFrom: '',
            countryFrom: ''
          }
          this.ripeResults.push(ripe);
        }

        //save results
        await this.ripeService.saveMeasurementResults(this.orgName, this.productObjective, this.description, this.ripeResults).then(async () => {
          await this.locationService.getLocation(this.ripeResults).then((data) => {
            this.ripeResults = data;
            this.locationService.saveLocationResults(this.orgName, this.productObjective, this.description, data).then(async (data) => {
              if (data) {
                await this.getHistoryResults(this.orgName, this.productObjective);
                await this.hideLoading();
                await this.showAlert('Data saved and Showing Results', 'Success');
              }
            });
          });
        });
      });
    }catch (e) {
      await this.hideLoading();
      await this.showAlert('Error getting results', 'Error');
    }

  }

  handleChange($event: any) {
    this.type = $event.detail.value;
  }


  async getHistoryResults(orgName:string,productObjective:string) {
    this.ripeHistoryResultsID = [];
    await this.ripeService.getHistoryResults(orgName, productObjective).then(async (data) => {
      for (let i = 0; i < data.length; i++) {
        const split = data[i].id.split('-');
        if (split[1] === this.productStep) {
          this.ripeHistoryResultsID.push(data[i].id);
        }
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
