import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../interfaces/product";
import {SystemTestService} from "../../../services/system-test.service";
import {SystemTest} from "../../../interfaces/system-test";
import {User} from "../../../interfaces/user";
import {LoadingController} from "@ionic/angular";
import {EChartsOption} from "echarts";
import {UnitTestService} from "../../../services/unit-test.service";
import {UnitTest} from "../../../interfaces/unit-test";

@Component({
  selector: 'app-software-testing-chooser',
  templateUrl: './software-testing-chooser.page.html',
  styleUrls: ['./software-testing-chooser.page.scss'],
})
export class SoftwareTestingChooserPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';

  private user: User = {};
  private orgName: string = '';


  systemTests: SystemTest[] = [];
  unitTests: UnitTest[] = [];

  passedSystemTests: number = 0;
  failedSystemTests: number = 0;

  systemTestsChart: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Passed', 'Failed'],
      left: 'left'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [] // This will be populated with execution dates
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Passed',
        type: 'line',
        data: [] // This will be populated with the number of passed tests
      },
      {
        name: 'Failed',
        type: 'line',
        data: [] // This will be populated with the number of failed tests
      },
    ]
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private systemTestService: SystemTestService,
    private loadingCtrl: LoadingController,
    private unitTestService: UnitTestService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.showLoading();
    this.getProductFromParams();
    await this.getUser();

    //Unit Tests
    await this.getUnitTests();

    //System Tests
    try {
      await this.getSystemTests().then(async () => {
        await this.calculatePassedSystemTests().then(async () => {
          await this.calculateGraphDataSystemTests().then(async () => {
            await this.graphSystemTests();
          });
        })
      });
    }catch (e) {
      console.log(e);
    }

    await this.hideLoading();

  }

  /**
   * This method gets the product and step from URL parameters.
   */
  getProductFromParams() {
    // Get product from URL params
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
    });
    console.log(this.productObjective);
    console.log(this.productStep);
  }


  /**
   * Methods to navigate.
   */
  navigateToCreateSystemTest() {
    // Navigate to the system test creation page
    this.router.navigate(['/create-system-test', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }
  navigateToCreateUnitTest() {
    // Navigate to the system test creation page
    this.router.navigate(['/create-unit-test', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }
  navigateToExecuteSystemTest(testTitle:string) {
    this.router.navigate(['/execute-system-test', {
      productObjective: this.productObjective,
      step: this.productStep,
      testTitle: testTitle
    }]);
  }
  navigateToViewHistorySystemTest(testTitle:string) {
    this.router.navigate(['/view-history-system-test', {
      productObjective: this.productObjective,
      step: this.productStep,
      testTitle: testTitle
    }]);
  }


  /**
   * Methods to calculate the number of passed and failed system tests.
   */
  async calculatePassedUnitTests() {

  }
  async calculatePassedSystemTests() {
    this.passedSystemTests = 0;
    this.failedSystemTests = 0;
    await this.systemTestService.getSystemTestHistoryByStep(this.orgName, this.productObjective, this.productStep).then(r => {
      r.forEach((test: { state: boolean; }) => {
        if (test.state) {
          this.passedSystemTests++;
        }
        else {
          this.failedSystemTests++;
        }
      });
    });
  }

  /**
   * Methods to calculate the data for the graph.
   * @returns {Promise<void>}
   */
  async calculateGraphDataUnitTests() {}
  async calculateGraphDataSystemTests() {
    // Get the system test history
    let filteredData: { timestamp: string; systemTest: SystemTest; }[] = [];
    const getSystemTests = await this.systemTestService.getSystemTestHistory(this.orgName, this.productObjective);
    // Filter the data to only include the system tests for the specified product step
    filteredData = Object.keys(getSystemTests)
      .filter(key => getSystemTests[key].productStep === this.productStep)
      .map(key => ({timestamp: key, systemTest: getSystemTests[key].systemTest}));
    return filteredData;
  }

  /**
   * Methods to populate the graph.
   */
  async graphUnitTests() {

  }
  async graphSystemTests() {
    const filteredData = await this.calculateGraphDataSystemTests();

    // count the number of passed and failed tests for each date
    let data = []

    for (let test of filteredData) {

      let reordered = test.timestamp.split(' ')[0].split('-');
      let ordered = [reordered[2], reordered[1], reordered[0]];
      let orderTimestamp = ordered.join('/');

      let addTime = test.timestamp.split(' ')[1];

      let concat = orderTimestamp + ' ' + addTime;
      let date = new Date(concat).toLocaleDateString();

      let passed = test.systemTest.state ? 1 : 0;
      let failed = test.systemTest.state ? 0 : 1;

      let index = data.findIndex((d: { date: string; }) => d.date === date);
      if (index === -1) {
        data.push({date, passed, failed});
      } else {
        data[index].passed += passed;
        data[index].failed += failed;
      }
    }


    // Sort the data by date
    data.sort((a: { date: string; }, b: { date: string; }) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      // @ts-ignore
      return dateA - dateB; // Sort in ascending order (oldest first)
    });

    // Populate the chart data
    this.systemTestsChart.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: data.map((d: { date: string; }) => d.date)
    };
    this.systemTestsChart.series = [
      {
        name: 'Passed',
        type: 'line',
        data: data.map((d: { passed: number; }) => d.passed)
      },
      {
        name: 'Failed',
        type: 'line',
        data: data.map((d: { failed: number; }) => d.failed)
      }
    ];


    this.systemTestsChart = {...this.systemTestsChart};

  }

  /**
   * Methods to show tests in each section.
   */
  async getUnitTests() {
    await this.showLoading()
    // Get unit tests from the service
    this.unitTestService.getUnitTests(this.orgName, this.productObjective, this.productStep).then(r => {
      this.unitTests = r;
    });
    await this.hideLoading();
  }
  async getSystemTests() {
    // Get system tests from the service
    this.systemTestService.getSystemTest(this.orgName, this.productObjective, this.productStep).then(r => {
      this.systemTests = r;
    });

  }


  /**
   * Methods to get the user.
   */
  async getUser() {
  const userString = localStorage.getItem('user');
  if (!userString) return;
  this.user = JSON.parse(userString);
  this.orgName = this.user.orgName!;
}


  async deleteTest(title: string) {
    let systemTest = this.systemTests.find((systemTest: { title: string; }) => systemTest.title === title);
    if (!systemTest) return;
    await this.systemTestService.deleteSystemTest(this.orgName, this.productObjective, this.productStep,systemTest).then(async () => {
      await this.getSystemTests();
    });
    await this.calculatePassedSystemTests();
    await this.calculateGraphDataSystemTests();
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
   * Refresh the data.
   * @param $event
   */
  doRefresh($event: any) {
    this.getSystemTests();
    $event.target.complete();
  }



}
