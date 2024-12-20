import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../../services/ripe.service";
import {Ripe} from "../../../interfaces/ripe";
import {User} from "../../../interfaces/user";
import {AlertController, LoadingController} from "@ionic/angular";
import {LocationService} from "../../../services/location.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Countries} from "../../../interfaces/countries";
import {compass} from "ionicons/icons";

/**
 * @component LatencyTestPage
 * @description This component handles the latency test operations.
 */
@Component({
  selector: 'app-latency-test',
  templateUrl: './latency-test.page.html',
  styleUrls: ['./latency-test.page.scss'],
})
export class LatencyTestPage implements OnInit {

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

  /**
   * @property {string} type - The type of the latency test, initialized as 'ping'.
   */
  type: string = 'ping';

  /**
   * @property {Ripe[]} ripeResults - The results of the latency test, initialized as an empty array.
   */
  ripeResults:Ripe[] = [];

  /**
   * @property {string[]} ripeHistoryResultsID - The IDs of the history results, initialized as an empty array.
   */
  ripeHistoryResultsID:string[] = [];

  /**
   * @property {string[]} selectedCountries - An array to store the selected countries. Initialized as an empty array.
   */
  selectedCountries: string[] = [];

  /**
   * @property {Object} countries - An object that contains two arrays: 'names' and 'probeIDs'.
   * 'names' is an array of country names.
   * 'probeIDs' is an array of corresponding probe IDs for the countries in the 'names' array.
   */
  countries = {
    names:["BRAZIL", "AUSTRALIA", "USA", "RUSSIA", "UK", "GERMANY", "ITALY",
      "SPAIN", "FRANCE", "JAPAN", "ARGENTINA", "SOUTH_AFRICA", "SAUDI_ARABIA",
      "GUATEMALA", "THAILAND", "INDIA"],
    probeIDs:[
      1003561, 1007336, 1008100, 1000053, 1002575, 1005576,
      1006903, 1004167, 1004967, 61328, 62589, 62590, 62643, 51757,
      1004373, 1007631,
      ]
  }


  /**
   * @constructor
   * @param {RipeService} ripeService - The service to handle RIPE operations.
   * @param {LoadingController} loadingCtrl - The controller to handle loading operations.
   * @param {LocationService} locationService - The service to handle location operations.
   * @param {ActivatedRoute} route - The route object to handle routing operations.
   * @param {AlertController} alertCtrl - The controller to handle alert operations.
   */
  constructor(
    private ripeService: RipeService,
    private loadingCtrl: LoadingController,
    private locationService: LocationService,
    private route:ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router
  ) {

  }

  /**
   * @method ngOnInit
   * @description Lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  ngOnInit() {}

  /**
   * @method ionViewWillEnter
   * @description Lifecycle hook that is called when the page is about to enter and become the active page.
   */
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


  /**
   * @method sendRequest
   * @description Sends a measurement request.
   */
  async sendRequest() {
    await this.showLoading();

    //Check if host input starts with http or https or finishes with a slash
    if (this.host.startsWith('http://') ||  this.host.startsWith('https://') || this.host.endsWith('/')) {
      await this.hideLoading();
      await this.showAlert('No http or https is needed, check for slashes at the end of the domain', 'Please enter a valid host');
      return;
    }

    //Get selected countries as a string
    if (this.selectedCountries.length === 0) {
      await this.hideLoading();
      await this.showAlert('Please select at least one country', 'Error');
      return;
    }

    let probes = '';
    for (let i = 0; i < this.selectedCountries.length; i++) {
      probes += this.countries.probeIDs[this.countries.names.indexOf(this.selectedCountries[i])] + ',';
    }



    const isTest = await this.ripeService.sendMeasurementRequest(this.host, this.description, this.type, probes);


    await this.hideLoading();

    const message = isTest !== false ?
      `Test sent, please wait a few seconds to GET RESULTS for ID: ${isTest}` :
      'Test not sent';

    const header = isTest !== false ? 'Success' : 'Error';
    if (isTest === false) {
      await this.showAlert(message, header);
      return;
    }

    let isOK = await this.showAlert(message, header)
    if (isOK){
      await this.showLoading();
      //wait for at least a 30 seconds before running the getResults
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.hideLoading();
      await this.getResults();
    }





  }

  /**
   * @method getResults
   * @description Gets the measurement results.
   */
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
          await this.showAlert('No data found yet', 'Trying again');
          await this.getResults();
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
                await this.getHistoryResults(this.orgName, this.productObjective);
                await this.hideLoading();
                await this.showAlert('Data saved and Showing Results, you can get more results in the test history', 'Success');
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

  /**
   * @method handleChange
   * @description Handles the change event of the select element.
   * @param {any} $event - The event object.
   */
  handleChange($event: any) {
    this.type = $event.detail.value;
  }

  /**
   * @method getHistoryResults
   * @description Gets the history results.
   * @param {string} orgName - The organization name.
   * @param {string} productObjective - The product objective.
   */
  async getHistoryResults(orgName:string, productObjective:string) {
    this.ripeHistoryResultsID = [];
    const data = await this.ripeService.getHistoryResults(orgName, productObjective);
    for (let i = 0; i < data.length; i++) {
      const split = data[i].id.split('-');
      if (split[1] === this.productStep) {
        this.ripeHistoryResultsID.push(data[i].id);
      }
    }

    //sort by date
    this.ripeHistoryResultsID.sort((a, b) => {
      // @ts-ignore
      return new Date(b.split('-')[2]) - new Date(a.split('-')[2]);
    });
  }



  /**
   * @method selectCountry
   * @description Selects or deselects a country. If the country is already selected, it is deselected. If it is not selected, it is selected.
   * @param {string} country - The name of the country to select or deselect.
   */
  selectCountry(country: string) {
    const index = this.selectedCountries.indexOf(country);
    if (index > -1) {
      this.selectedCountries.splice(index, 1);
    } else {
      this.selectedCountries.push(country);
    }
  }

  /**
   * @property {Object} countries - An object that contains two arrays: 'names' and 'probeIDs'.
   * 'names' is an array of country names.
   * 'probeIDs' is an array of corresponding probe IDs for the countries in the 'names' array.
   */
  isCountrySelected(country: string) {
    return this.selectedCountries.includes(country);
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

  /**
   * @method viewHistory
   * @description Navigates to the latency results page.
   * @param {string} test - The test description.
   */
  async viewHistory(test: string) {
    await this.router.navigate(['/latency-results'], {
      queryParams: {
        description: test,
        productObjective: this.productObjective,
        step: this.productStep
      }
    });
  }

}
