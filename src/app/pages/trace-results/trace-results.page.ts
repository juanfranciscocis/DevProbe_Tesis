import { Component, OnInit } from '@angular/core';
import {Traceroute} from "../../classes/traceroute";
import {RipeTraceService} from "../../services/ripe-trace.service";
import {User} from "../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {LocationTraceService} from "../../services/location-trace.service";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-trace-results',
  templateUrl: './trace-results.page.html',
  styleUrls: ['./trace-results.page.scss'],
})
export class TraceResultsPage implements OnInit {

  ripeResults: Traceroute[] = [];

  description: string = '';
  productObjective: string = '';
  orgName: string = '';
  measurementID: string = '';


  constructor(
    private ripeTraceService: RipeTraceService,
    private route: ActivatedRoute,
    private router: Router,
    private locationTraceService: LocationTraceService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
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


    await this.ripeTraceService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      console.log(r);
      let res = [];
      // @ts-ignore
      for (let i = 0; i < r.length; i++) {
        // @ts-ignore
        if (r[i]['id'] == this.description) {
          // @ts-ignore
          res.push(r[i]['data']['data']);
        }
      }
      this.ripeResults = res[0]
      this.measurementID = this.ripeResults[0].id!;
      console.log(this.ripeResults);
      console.log(this.measurementID);
    });


  }





  async getMoreResults() {
    this.ripeResults = [];
    try {
      await this.showLoading();
      const response = await this.ripeTraceService.getTraceResults(this.measurementID);
      if (!response || response.length === 0) {
        await this.hideLoading();
        await this.showAlert('No trace results found', 'Error');
        await this.getMoreResults();
        return;
      }
      for (let traceroute of response) {
        try {
          traceroute = await this.locationTraceService.getLocationDestSrc(traceroute);
          traceroute = await this.locationTraceService.getLocationFrom(traceroute);
          this.ripeResults.push(traceroute);
        }catch (e){
          console.log(e);
        }
      }
      const saveResponse = await this.ripeTraceService.saveMeasurementResults(this.orgName, this.productObjective, this.description, this.ripeResults);

      if (saveResponse) {
        await this.hideLoading();
        await this.showAlert('Trace results saved successfully', 'Success');
      } else {
        await this.hideLoading();
        await this.showAlert('Error saving trace results', 'Error');
      }
    } catch (e) {
      console.log(e);
      await this.hideLoading();
    }
  }




  goToMap() {
      this.router.navigate(['/show-map-trace'], { queryParams: { description: this.description, productObjective: this.productObjective, orgName: this.orgName } });
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
