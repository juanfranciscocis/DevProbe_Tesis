import { Component, OnInit } from '@angular/core';
import {SystemTest} from "../../interfaces/system-test";
import {SystemTestService} from "../../services/system-test.service";
import {User} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-system-test',
  templateUrl: './view-system-test.page.html',
  styleUrls: ['./view-system-test.page.scss'],
})
export class ViewSystemTestPage implements OnInit {

  user: User = {};
  orgName: string = '';

  private productObjective: any;
  private productStep: any;
  private testTitle: any;
  private timestamp: any;


  systemTest: SystemTest = {
    title: '',
    description: '',
    steps: [],
    type: '',
    state: false
  };





  constructor(
    private systemTestService: SystemTestService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getSystemTest();
  }

  getProductFromParams() {
    // Get product from URL params
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective'];
      this.productStep = params['step'];
      this.testTitle = params['testTitle'];
      this.timestamp = params['timestamp'];

    });
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.testTitle);
    console.log(this.timestamp);

  }


  async getSystemTest() {
    // Get user
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.orgName = this.user.orgName || '';
    // Get the system test
    this.systemTest = await this.systemTestService.getSystemTestByTimestamp(this.orgName, this.productObjective, this.productStep, this.testTitle, this.timestamp);
  }
}
