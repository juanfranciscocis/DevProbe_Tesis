import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SystemTestService} from "../../../services/software_testing/system-test.service";
import {SystemTest} from "../../../interfaces/system-test";
import {User} from "../../../interfaces/user";
import {AlertController, LoadingController} from "@ionic/angular";
import {EChartsOption} from "echarts";
import {UnitTestService} from "../../../services/software_testing/unit-test.service";
import {UnitTest} from "../../../interfaces/unit-test";
import {IntegrationTest} from "../../../interfaces/integration-test";
import {IntegrationTestService} from "../../../services/software_testing/integration-test.service";

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


  unitTests: UnitTest[] = [];
  integrationTests: IntegrationTest[] = [];
  systemTests: SystemTest[] = [];



  passedUnitTests:number = 0;
  failedUnitTests:number = 0;
  passedIntegrationTests:number = 0;
  failedIntegrationTests:number = 0;
  passedSystemTests: number = 0;
  failedSystemTests: number = 0;

  unitTestsChart: EChartsOption = {
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
      data: [] // This will be populated with test titles
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
  }
  integrationTestsChart: EChartsOption = {
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
        data: [], // This will be populated with the number of passed tests
        color: 'green'
      },
      {
        name: 'Failed',
        type: 'line',
        data: [], // This will be populated with the number of failed tests,
        color: 'red'
      },
    ]
  };
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
        data: [], // This will be populated with the number of passed tests
        color: 'green'
      },
      {
        name: 'Failed',
        type: 'line',
        data: [], // This will be populated with the number of failed tests,
        color: 'red'
      },
    ]
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private systemTestService: SystemTestService,
    private loadingCtrl: LoadingController,
    private unitTestService: UnitTestService,
    private integrationTestService: IntegrationTestService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.showLoading();
    this.getProductFromParams();
    await this.getUser();

    //Unit Tests
    try {
      await this.getUnitTests().then(async () => {
        await this.calculatePassedUnitTests().then(async () => {
            await this.graphUnitTests();
        });
      });
    }catch (e) {
      console.log(e);
    }

    //Integration Tests
    try {
      await this.getIntegrationTests().then(async () => {
        await this.calculatePassedIntegrationTests().then(async () => {
            await this.graphIntegrationTests();
        });
      });
    }catch (e) {
      console.log(e);
    }

    //System Tests
    try {
      await this.getSystemTests().then(async () => {
        await this.calculatePassedSystemTests().then(async () => {
            await this.graphSystemTests();
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
  navigateToCreateIntegrationTest() {
    // Navigate to the integration test creation page
    this.router.navigate(['/create-integration-test', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }
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
   * Methods to copy the test code.
   */
  copyUnitTestCode(title: string) {
    let unitTest = this.unitTests.find((unitTest: { title: string; }) => unitTest.title === title);
    if (!unitTest) return;
    this.copyCode(unitTest.code);
  }
  copyIntegrationTestCode(title: string) {
    let integrationTest = this.integrationTests.find((integrationTest: { title: string; }) => integrationTest.title === title);
    if (!integrationTest) return;
    this.copyCode(integrationTest.code);
  }


  /**
   * Methods to calculate the number of passed and failed system tests.
   */
  async calculatePassedUnitTests() {
    this.passedUnitTests = 0;
    this.failedUnitTests = 0;
    // Get the number of passed and failed unit tests
    this.unitTests.forEach(test => {
      if (test.state) {
        this.passedUnitTests++;
      }
      else {
        this.failedUnitTests++;
      }
    });
  }
  async calculatePassedIntegrationTests() {
    this.passedIntegrationTests = 0;
    this.failedIntegrationTests = 0;
    // Get the number of passed and failed integration tests
    this.integrationTests.forEach(test => {
      if (test.state) {
        this.passedIntegrationTests++;
      }
      else {
        this.failedIntegrationTests++;
      }
    });
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
  async calculateGraphDataUnitTests() {
    // Get the unit test history
    let filteredData:UnitTest[] = [];
    const getUnitTests = await this.unitTestService.getUnitTestHistory(this.orgName, this.productObjective);
    console.log('unit tests',getUnitTests);
    // Filter the data to only include the unit tests for the specified product step
    const keys = Object.keys(getUnitTests);
    //Data looks like this ej:
    //UserTable: {2021-09-29 12:00:00: {unitTest: {title: "UserTable", code: "console.log('Hello World!')", state: true}}}
    //We need to filter the data to only include the unit tests for the specified product step
    for (let key of keys) {
      if (key === this.productStep) {
        filteredData.push(getUnitTests[key]);
      }
    }
    console.log('filtrado',filteredData);
    return filteredData[0];
  }
  async calculateGraphDataIntegrationTests() {
    // Get the unit test history
    let filteredData:IntegrationTest[] = [];
    const getIntegrationTests = await this.integrationTestService.getIntegrationTestHistory(this.orgName, this.productObjective);
    console.log('integration tests',getIntegrationTests);
    // Filter the data to only include the unit tests for the specified product step
    const keys = Object.keys(getIntegrationTests);
    //Data looks like this ej:
    //UserTable: {2021-09-29 12:00:00: {unitTest: {title: "UserTable", code: "console.log('Hello World!')", state: true}}}
    //We need to filter the data to only include the unit tests for the specified product step
    for (let key of keys) {
      if (key === this.productStep) {
        filteredData.push(getIntegrationTests[key]);
      }
    }
    console.log('filtrado',filteredData);
    return filteredData[0];
  }
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
    const filteredData = await this.calculateGraphDataUnitTests();

    let data = []

    // @ts-ignore
    for (let test of filteredData) {
      data.push(test.last_state_change );
    }

    //combine into one array
    let combined = [].concat.apply([], data);

    // Sort the data by date
    combined.sort((a: { date: string; }, b: { date: string; }) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      // @ts-ignore
      return dateA - dateB; // Sort in ascending order (oldest first)
    });

    console.log('combined',combined);

    // Combine data by date
    let dataByDate = [];

    for (let test of combined) {
      // @ts-ignore
      let date = test.date.split(' ')[0];
      // @ts-ignore
      let state = test.state;

      dataByDate.push({date, state});

    }


    // Count the number of passed and failed tests for each date
    data = [];

    for (let test of dataByDate) {
      let index = data.findIndex((d: { date: string; }) => d.date === test.date);
      if (index === -1) {
        data.push({date: test.date, passed: test.state ? 1 : 0, failed: test.state ? 0 : 1});
      } else {
        if (test.state) {
          data[index].passed++;
        } else {
          data[index].failed++;
        }
      }
    }


    // Populate the chart data
    this.unitTestsChart.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: data.map((d: { date: string; }) => d.date)
    };

    this.unitTestsChart.series = [
      {
        name: 'Passed',
        type: 'line',
        data: data.map((d: { passed: number; }) => d.passed),
        color: 'green'
      },
      {
        name: 'Failed',
        type: 'line',
        data: data.map((d: { failed: number; }) => d.failed),
        color: 'red'
      }
    ];



    this.unitTestsChart = {...this.unitTestsChart};

    //get the eleement by id unitChart
    let unitChart = document.getElementById('unitChart');
    console.log(unitChart);
    //change width and height
    unitChart!.style.width = '100%';
    unitChart!.style.height = '25em';





  }
  async graphIntegrationTests() {
    const filteredData = await this.calculateGraphDataIntegrationTests();

    let data = []

    // @ts-ignore
    for (let test of filteredData) {
      data.push(test.last_state_change );
    }

    //combine into one array
    let combined = [].concat.apply([], data);

    // Sort the data by date
    combined.sort((a: { date: string; }, b: { date: string; }) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      // @ts-ignore
      return dateA - dateB; // Sort in ascending order (oldest first)
    });

    console.log('combined',combined);

    // Combine data by date
    let dataByDate = [];

    for (let test of combined) {
      // @ts-ignore
      let date = test.date.split(' ')[0];
      // @ts-ignore
      let state = test.state;

      dataByDate.push({date, state});

    }


    // Count the number of passed and failed tests for each date
    data = [];

    for (let test of dataByDate) {
      let index = data.findIndex((d: { date: string; }) => d.date === test.date);
      if (index === -1) {
        data.push({date: test.date, passed: test.state ? 1 : 0, failed: test.state ? 0 : 1});
      } else {
        if (test.state) {
          data[index].passed++;
        } else {
          data[index].failed++;
        }
      }
    }


    // Populate the chart data
    this.integrationTestsChart.xAxis = {
      type: 'category',
      boundaryGap: false,
      data: data.map((d: { date: string; }) => d.date)
    };

    this.integrationTestsChart.series = [
      {
        name: 'Passed',
        type: 'line',
        data: data.map((d: { passed: number; }) => d.passed),
        color: 'green'
      },
      {
        name: 'Failed',
        type: 'line',
        data: data.map((d: { failed: number; }) => d.failed),
        color: 'red'
      }
    ];



    this.integrationTestsChart = {...this.integrationTestsChart};

    //get the eleement by id unitChart
    let integrationChart = document.getElementById('integrationChart');
    console.log(integrationChart);
    //change width and height
    integrationChart!.style.width = '100%';
    integrationChart!.style.height = '25em';






  }
  async graphSystemTests() {
    const filteredData = await this.calculateGraphDataSystemTests();

    // count the number of passed and failed tests for each date
    let data = []

    // @ts-ignore
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
        data: data.map((d: { passed: number; }) => d.passed),
        color: 'green'
      },
      {
        name: 'Failed',
        type: 'line',
        data: data.map((d: { failed: number; }) => d.failed),
        color: 'red'
      }
    ];


    this.systemTestsChart = {...this.systemTestsChart};

    //get the eleement by id systemChart
    let systemChart = document.getElementById('systemChart');
    console.log(systemChart);
    //change width and height
    systemChart!.style.width = '100%';
    systemChart!.style.height = '25em';

  }


  /**
   * Methods to show tests in each section.
   */
  async getUnitTests() {
    // Get unit tests from the service
    await this.unitTestService.getUnitTests(this.orgName, this.productObjective, this.productStep).then(r => {
      this.unitTests = r;
    });
    return this.unitTests;
  }
  async getIntegrationTests() {
    // Get unit tests from the service
    await this.integrationTestService.getIntegrationTests(this.orgName, this.productObjective, this.productStep).then(r => {
      this.integrationTests = r;
    });
    return this.integrationTests;
  }
  async getSystemTests() {
    // Get system tests from the service
    this.systemTestService.getSystemTest(this.orgName, this.productObjective, this.productStep).then(r => {
      this.systemTests = r;
    });

  }


  /**
   * Show Alert to tell the user a way to automate the unit test result or integration test result.
   */
  async infoAutomateUnitState(title: string) {
    await this.showAlert('You can automate the result of this unit test (' + title + ') by sending a status update to the /unit_test_state API endpoint.', 'Automate Unit Test State');
  }
  async infoAutomateIntegrationState(title: string) {
    await this.showAlert('You can automate the result of this integration test (' + title + ') by sending a status update to the /integration_test_state API endpoint.', 'Automate Integration Test State');
  }

  /**
   * Send a status update and save to the database for unit and integration tests.
   */
  async updateUnitState(title: string, state: boolean) {
    await this.showLoading();
    await this.unitTestService.updateUnitTestState(this.orgName, this.productObjective, this.productStep, title, state).then(async r => {
      if (r) {
        await this.getUnitTests();
        await this.calculatePassedUnitTests();
        await this.graphUnitTests();
        await this.hideLoading();
      }else {
        await this.hideLoading();
        await this.showAlert('There was an error updating the unit test state.', 'Error');
      }
    });
    await this.hideLoading();
  }
  async updateIntegrationState(title: string, state: boolean) {
    await this.showLoading();
    await this.integrationTestService.updateIntegrationTestState(this.orgName, this.productObjective, this.productStep, title, state).then(async r => {
      if (r) {
        await this.getIntegrationTests();
        await this.calculatePassedIntegrationTests();
        await this.graphIntegrationTests();
        await this.hideLoading();
      }else {
        await this.hideLoading();
        await this.showAlert('There was an error updating the integration test state.', 'Error');
      }
    });
    await this.hideLoading();
  }

  /**
   * Methods to delete tests.
   */
  async deleteUnitTest(title: string) {
    await this.showLoading() ;
    let unitTest = this.unitTests.find((unitTest: { title: string; }) => unitTest.title === title);
    if (!unitTest) return;
    await this.unitTestService.deleteUnitTest(this.orgName, this.productObjective, this.productStep,unitTest).then(async () => {
      await this.getUnitTests();
      await this.calculatePassedUnitTests();
      await this.graphUnitTests();
    });
    await this.hideLoading();

  }
  async deleteIntegrationTest(title: string) {
    await this.showLoading();
    let integrationTest = this.integrationTests.find((integrationTest: { title: string; }) => integrationTest.title === title);
    if (!integrationTest) return;
    await this.integrationTestService.deleteIntegrationTest(this.orgName, this.productObjective, this.productStep,integrationTest).then(async () => {
      await this.getIntegrationTests();
      await this.calculatePassedIntegrationTests();
      await this.graphIntegrationTests();
    });
    await this.hideLoading();
  }
  async deleteSystemTest(title: string) {
    await this.showLoading();
    let systemTest = this.systemTests.find((systemTest: { title: string; }) => systemTest.title === title);
    if (!systemTest) return;
    await this.systemTestService.deleteSystemTest(this.orgName, this.productObjective, this.productStep,systemTest).then(async () => {
      await this.getSystemTests();
    });
    await this.calculatePassedSystemTests();
    await this.calculateGraphDataSystemTests();
    await this.graphSystemTests();
    await this.hideLoading();
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


  private copyCode(code: string) {
    // Copy the code to the clipboard
    navigator.clipboard.writeText(code).then(async () => {
      await this.showAlert('Code copied to clipboard.', 'Code Copied');
    }, async (err) => {
      await this.showAlert('There was an error copying the code to the clipboard.', 'Error');
    });
  }





}
