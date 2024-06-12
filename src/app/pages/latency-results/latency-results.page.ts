import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RipeService} from "../../services/ripe.service";
import {User} from "../../interfaces/user";
import {Ripe} from "../../interfaces/ripe";
import {AlertController, LoadingController} from "@ionic/angular";
import {LocationService} from "../../services/location.service";
import {Countries} from "../../interfaces/countries";

@Component({
  selector: 'app-latency-results',
  templateUrl: './latency-results.page.html',
  styleUrls: ['./latency-results.page.scss'],
})
export class LatencyResultsPage implements OnInit {


  @Input() description: string = '';
  orgName: string = '';
  productObjective:string = '';
  user:User = {};
  ripeResults:Ripe[] = [];
  testID: string = '';




  constructor(
    private route: ActivatedRoute,
    private ripeService: RipeService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private locationService: LocationService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.description = params['description'];
      this.productObjective = params['productObjective'];
    });


    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    this.orgName = user.orgName!;

    this.ripeService.getAllResultsByDescription(this.orgName, this.productObjective, this.description).then(r => {
      // @ts-ignore
      for (let i = 0; i < r['data'].length; i++){
        // @ts-ignore
        this.ripeResults.push(r['data'][i]);
      }
      // @ts-ignore
      this.testID = r['data'][0]['id'];
      console.log(this.ripeResults);
      console.log(this.testID);

    });

  }

  goToMap() {
    this.router.navigate(['/show-map'], { queryParams: { description: this.description, productObjective: this.productObjective, orgName: this.orgName } });

  }

  async getMoreResults() {
    await this.showLoading();

    this.ripeResults = [];

    try {
      let measurement = (await this.ripeService.getMeasurementResults(this.testID));
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
            countryFrom: '',
            id:  this.ripeService.measurementID
          }
          this.ripeResults.push(ripe);
        }

        //save results
        await this.ripeService.saveMeasurementResults(this.orgName, this.productObjective, this.description, this.ripeResults).then(async () => {
          await this.locationService.getLocation(this.ripeResults).then((data) => {
            this.ripeResults = data;
            this.locationService.saveLocationResults(this.orgName, this.productObjective, this.description, data).then(async (data) => {
              if (data) {
                await this.hideLoading();
                await this.showAlert('Data saved and Showing Results', 'Success');
              }
            });
          });
        });
      });
    } catch (e) {
      await this.hideLoading();
      await this.showAlert('Error getting results', 'Error');
    }
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
