import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../services/ripe.service";
import {Ripe} from "../../interfaces/ripe";
import {User} from "../../interfaces/user";
import {TeamsService} from "../../services/teams.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {LocationService} from "../../services/location.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-latency-test',
  templateUrl: './latency-test.page.html',
  styleUrls: ['./latency-test.page.scss'],
})
export class LatencyTestPage implements OnInit {

  @Input() host: string = 'portfoliojuanfranciscocisneros.web.app';
  product:string = '';
  @Input() description: string = 'NEW IONIC';
  type: string = 'ping';

  ripeResults:Ripe[] = [];

  constructor(
    private ripeService: RipeService,
    private teamsService: TeamsService,
    private loadingCtrl: LoadingController,
    private locationService: LocationService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController,
  ) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    // get url params
    this.route.params.subscribe(params => {
      //get current date and time
      const currentdate = new Date();
      const datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + "-"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

       this.description = params['productObjective'] + '-' + params['step'] + '-' + datetime;
    });
  }



  async sendRequest() {
    await this.showLoading();
    console.log(this.host, this.description, this.type);
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

    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    const orgName = user.orgName!;


    (await this.ripeService.getMeasurementResults()).subscribe(async (data) => {

      //if no data
      if(data.length === 0){
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
      let product = this.product;
      product = product.replace(/\s/g, '');
      console.log(product);
      await this.ripeService.saveMeasurementResults(orgName, product, this.description, this.ripeResults).then(async () => {
        await this.locationService.getLocation(this.ripeResults).then((data) => {
          this.ripeResults = data;
          this.locationService.saveLocationResults(orgName, product, this.description, data).then(async (data) => {
            if (data) {
              console.log('Data saved');
              console.log(this.ripeResults);
              await this.hideLoading();
              await this.showAlert('Data saved and Showing Results', 'Success');
            }
          });
        });
      });
    });

  }

  handleChange($event: any) {
    this.type = $event.detail.value;
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
