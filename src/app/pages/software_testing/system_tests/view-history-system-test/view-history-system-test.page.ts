import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SystemTestService} from "../../../../services/software_testing/system-test.service";
import {User} from "../../../../interfaces/user";
import {SystemTest} from "../../../../interfaces/system-test";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-view-history-system-test',
  templateUrl: './view-history-system-test.page.html',
  styleUrls: ['./view-history-system-test.page.scss'],
})
export class ViewHistorySystemTestPage implements OnInit {

  user:User = {};
  orgName:string = '';

  productObjective: string = '';
  productStep: string = '';
  testTitle: string = '';

  systemTestHistory: any[] = [];
  passed:number = 0;
  failed:number = 0;




  constructor(
    private activatedRoute: ActivatedRoute,
    private systemTestService: SystemTestService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getHistorySystemTest();
    await this.passedTests();
  }

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


  async getHistorySystemTest() {
    await this.showLoading();
    // Get user
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.orgName = this.user.orgName || '';

    await this.systemTestService.getSystemTestHistoryByTitle(this.orgName, this.productObjective, this.productStep, this.testTitle).then(data => {
      this.systemTestHistory = data;

      // Sort the systemTestHistory array by date and time
      this.systemTestHistory.sort((a, b) => {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();
        return dateB - dateA; // Sort in descending order (most recent first)
      });
    });

    await this.hideLoading();
  }


  async delete(timestamp: string) {
    await this.showLoading();
    await this.systemTestService.deleteSystemTestHistoryByKey(this.orgName, this.productObjective, this.productStep, this.testTitle, timestamp).then(async () => {
      await this.getHistorySystemTest();
    });
    await this.hideLoading();
  }

  async passedTests(){
    this.passed =  this.systemTestHistory.filter((test: { systemTest: { state: boolean; }; }) => test.systemTest.state).length;
    this.failed = this.systemTestHistory.length - this.passed;
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


  async navigateToViewHistorySystemTest(test: any) {
    await this.router.navigate(['/view-system-test', {
      productObjective: this.productObjective,
      step: this.productStep,
      testTitle: this.testTitle,
      timestamp: test.timestamp
    }]);
  }
}
