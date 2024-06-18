import {Component, Input, OnInit} from '@angular/core';
import {RipeTraceService} from "../../services/ripe-trace.service";
import {User} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";
import {Traceroute} from "../../classes/traceroute";
import {LocationTraceService} from "../../services/location-trace.service";

@Component({
  selector: 'app-trace-test',
  templateUrl: './trace-test.page.html',
  styleUrls: ['./trace-test.page.scss'],
})
export class TraceTestPage implements OnInit {



  /**
   * @property {User} user - The user object, initialized as an empty object.
   */
  user: User = {}

  /**
   * @property {string} orgName - The name of the organization, initialized as an empty string.
   */
  orgName: string = '';

  /**
   * @property {string} productObjective - The objective of the product, initialized as an empty string.
   */
  productObjective:string = '';

  /**
   * @property {string} productStep - The step of the product, initialized as an empty string.
   */
  productStep:string = '';

  /**
   * @property {string} host - The host for the latency test, initialized as 'portfoliojuanfranciscocisneros.web.app'.
   * @Input - This property is an input property and can be bound in the template.
   */
  @Input() host: string = 'portfoliojuanfranciscocisneros.web.app';

  /**
   * @property {string} description - The description for the latency test, initialized as 'NEW IONIC'.
   * @Input - This property is an input property and can be bound in the template.
   */
  @Input() description: string = 'NEW IONIC';

  type: string = 'traceroute';


  countries = {
    names: ["BRAZIL", "AUSTRALIA", "USA", "RUSSIA", "UK", "GERMANY", "ITALY",
    "SPAIN", "FRANCE", "JAPAN", "ARGENTINA", "SOUTH_AFRICA", "SAUDI_ARABIA",
    "GUATEMALA", "THAILAND", "INDIA"],
    probeIDs: ["BR", "AU", "US", "RU", "GB", "GE", "IT", "ES", "FR", "JP", "AR", "ZA", "SA", "GT", "TH", "IN"]
  }


  private selectedCountries: string[] = [];


  ripeResults: Traceroute[] = [];
  ripeHistoryResultsID: any = [];





  constructor(
    private ripeTraceService: RipeTraceService,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private locationTraceService: LocationTraceService
  ) { }

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
    await this.hideLoading();

  }





  async sendTraceRequest(){
    await this.showLoading();
    await this.ripeTraceService.sendTraceRequest(this.host, this.description, this.type, this.selectedCountries.join(',') + ',').then(async (response) => {
      if (response) {
        await this.hideLoading();
        await this.showAlert('Trace request sent successfully', 'Success');
      } else {
        await this.hideLoading();
        await this.showAlert('Error sending trace request', 'Error');
      }
    });
  }


   async getMeasurementResults() {
    try {
      await this.showLoading();
      const response = await this.ripeTraceService.getTraceResults();
      if (!response || response.length === 0) {
        await this.hideLoading();
        await this.showAlert('No trace results found', 'Error');
        return;
      }
      for (let traceroute of response) {
        traceroute = await this.locationTraceService.getLocationDestSrc(traceroute);
        traceroute = await this.locationTraceService.getLocationFrom(traceroute);
        this.ripeResults.push(traceroute);
      }
      const saveResponse = await this.ripeTraceService.saveMeasurementResults(this.orgName, this.productObjective, this.description, this.ripeResults);
      await this.hideLoading();
      if (saveResponse) {
        await this.showAlert('Trace results saved successfully', 'Success');
      } else {
        await this.showAlert('Error saving trace results', 'Error');
      }
    } catch (e) {
      console.log(e);
      await this.hideLoading();
    }
  }




  /**
   * @method selectCountry
   * @description Selects or deselects a country. If the country is already selected, it is deselected. If it is not selected, it is selected.
   * @param {string} country - The name of the country to select or deselect.
   */
  selectCountry(country: string) {
    const index = this.countries.names.indexOf(country);
    const probeID = this.countries.probeIDs[index];
    const selectedIndex = this.selectedCountries.indexOf(probeID);
    if (selectedIndex > -1) {
      this.selectedCountries.splice(selectedIndex, 1);
    } else {
      this.selectedCountries.push(probeID);
    }
  }

  /**
   * @method isCountrySelected
   * @description Checks if a country is selected.
   * @param {string} country - The name of the country to check.
   * @returns {boolean} - Returns true if the country is selected, false otherwise.
   */
  isCountrySelected(country: string) {
    const index = this.countries.names.indexOf(country);
    const probeID = this.countries.probeIDs[index];
    return this.selectedCountries.includes(probeID);
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
