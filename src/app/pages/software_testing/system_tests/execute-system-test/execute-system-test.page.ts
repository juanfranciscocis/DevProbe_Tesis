import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SystemTest} from "../../../../interfaces/system-test";
import {User} from "../../../../interfaces/user";
import {SystemTestService} from "../../../../services/system-test.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-execute-system-test',
  templateUrl: './execute-system-test.page.html',
  styleUrls: ['./execute-system-test.page.scss'],
})
export class ExecuteSystemTestPage implements OnInit {

  productObjective: string = '';
  productStep: string = '';
  testTitle: string = '';

  systemTest:SystemTest = {
    title: '',
    description: '',
    steps: [],
    type: 'system-test',
    state: false
  }

  orgName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private systemTestService: SystemTestService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getProductFromParams();
    this.getSystemTest();
  }

  ionViewWillEnter() {
    this.getProductFromParams();
    this.getSystemTest();
  }

  /**
   * This method gets the product and step from URL parameters.
   */
  getProductFromParams() {
    // Get product from URL params
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
      this.testTitle = params['testTitle'];
    });
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.testTitle);
  }

  async getSystemTest() {
    // Get User from local storage
    const userString = localStorage.getItem('user');
    if (!userString) return

    const user: User = JSON.parse(userString);
    this.orgName = user.orgName!;

    // Get system test from database
    await this.systemTestService.getSystemTest(this.orgName, this.productObjective, this.productStep).then(r => {
      this.systemTest = r.find((systemTest: { title: string; }) => systemTest.title === this.testTitle)!;
    });
  }

  okClick(stepTitle: string) {
    //Change the step state to true
    this.systemTest.steps.find((step: { stepTitle: string; }) => step.stepTitle === stepTitle)!.isComplete = true;
    console.log(this.systemTest);
  }

  badClick(stepTitle: string) {
    //Change the step state to false
    this.systemTest.steps.find((step: { stepTitle: string; }) => step.stepTitle === stepTitle)!.isComplete = false;
    console.log(this.systemTest);
  }

  async save() {
    await this.showLoading()
    //check if all steps are complete
    let isComplete = true;
    this.systemTest.steps.forEach(step => {
      if (!step.isComplete) {
        isComplete = false;
      }
    });
    this.systemTest.state = isComplete

    // Save the system test
    await this.systemTestService.saveSystemTest(this.orgName, this.productObjective, this.productStep, this.systemTest);

    await this.hideLoading()

    // Navigate to the last page
    window.history.back();

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
