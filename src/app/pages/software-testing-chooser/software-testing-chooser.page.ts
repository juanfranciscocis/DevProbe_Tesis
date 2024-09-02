import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../interfaces/product";
import {SystemTestService} from "../../services/system-test.service";
import {SystemTest} from "../../interfaces/system-test";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-software-testing-chooser',
  templateUrl: './software-testing-chooser.page.html',
  styleUrls: ['./software-testing-chooser.page.scss'],
})
export class SoftwareTestingChooserPage implements OnInit {
  productStep: string = '';
  systemTests: SystemTest[] = [];
  productObjective: string = '';
  private user: User = {};
  private orgName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private systemTestService: SystemTestService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getProductFromParams();
    this.getSystemTests();

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

  navigateToCreateSystemTest() {
    // Navigate to the system test creation page
    this.router.navigate(['/create-system-test', {
      productObjective: this.productObjective,
      step: this.productStep
    }]);
  }

  getSystemTests() {
    // Get User from local storage
    const userString = localStorage.getItem('user');
    if (!userString) return;

    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;


    // Get system tests from the service
    this.systemTestService.getSystemTest(this.orgName, this.productObjective, this.productStep).then(r => {
      this.systemTests = r;
    });
  }


  doRefresh($event: any) {
    this.getSystemTests();
    $event.target.complete();
  }
}
