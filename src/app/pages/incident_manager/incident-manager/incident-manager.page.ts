import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-incident-manager',
  templateUrl: './incident-manager.page.html',
  styleUrls: ['./incident-manager.page.scss'],
})
export class IncidentManagerPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.showLoading();
    this.getParams();
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


  async navigateToNewIncident() {
    await this.router.navigate(['/new-incident', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
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
