import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../interfaces/product";
import {SystemTestService} from "../../../services/system-test.service";
import {SystemTest} from "../../../interfaces/system-test";
import {User} from "../../../interfaces/user";
import {LoadingController} from "@ionic/angular";
import {EChartsOption} from "echarts";

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
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getSystemTests();
    await this.calculatePassedSystemTests();
    await this.calculateGraphDataSystemTests();
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
  async calculatePassedSystemTests() {
    await this.showLoading();

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

    await this.hideLoading();
  }

  /**
   * Methods to calculate the data for the graph.
   * @returns {Promise<void>}
   */
  async calculateGraphDataSystemTests() {
    await this.showLoading();
    // Get the system test history
    await this.systemTestService.getSystemTestHistory(this.orgName, this.productObjective).then(r => {
      // Filter the data to only include the system tests for the specified product step
      const filteredData = Object.keys(r)
        .filter(key => r[key].productStep === this.productStep)
        .map(key => ({ timestamp: key, systemTest: r[key].systemTest }));

      // Sort the data by timestamp year, month, and day
      filteredData.sort((a, b) => {
        const dateA = new Date(a.timestamp).getTime();
        const dateB = new Date(b.timestamp).getTime();
        return dateA - dateB; // Sort in ascending order (oldest first)
      });

      // count the number of passed and failed tests for each date
      let data = [
      ]

      for (let test of filteredData) {

        let reordered = test.timestamp.split(' ')[0].split('-');
        let ordered = [reordered[2], reordered[1], reordered[0]];
        console.log(ordered);
        let orderTimestamp = ordered.join('/');
        console.log(orderTimestamp);

        let addTime = test.timestamp.split(' ')[1];

        let concat = orderTimestamp + ' ' + addTime;
        console.log(concat);
        let date = new Date(concat).toLocaleDateString();


        let passed = test.systemTest.state ? 1 : 0;
        let failed = test.systemTest.state ? 0 : 1;

        let index = data.findIndex((d: { date: string; }) => d.date === date);
        if (index === -1) {
          data.push({ date, passed, failed });
        }
        else {
          data[index].passed += passed;
          data[index].failed += failed;
        }
      }

      console.log(data);

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

      console.log(this.systemTestsChart.xAxis.data);
      console.log(this.systemTestsChart.series[0].data);  // Passed data
      console.log(this.systemTestsChart.series[1].data);  // Failed data

      this.systemTestsChart = { ...this.systemTestsChart };


    });
    await this.hideLoading();
  }


  /**
   * Methods to show tests in each section.
   */
  async getSystemTests() {
    await this.showLoading()
    // Get User from local storage
    const userString = localStorage.getItem('user');
    if (!userString) return;

    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;


    // Get system tests from the service
    this.systemTestService.getSystemTest(this.orgName, this.productObjective, this.productStep).then(r => {
      this.systemTests = r;
    });

    await this.hideLoading();
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
