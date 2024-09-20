import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-load-test-history',
  templateUrl: './load-test-history.page.html',
  styleUrls: ['./load-test-history.page.scss'],
})
export class LoadTestHistoryPage implements OnInit {

  productObjective: string = '';
  productStep: string = '';
  orgName: string = '';
  date: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.activatedRoute.params.subscribe(params => {
      this.productObjective = params['productObjective']; //this is the product objective
      this.productStep = params['productStep']; //this is the step of the product
      this.date = params['day']; //this is the date of the test
    });

    const user = JSON.parse(localStorage.getItem('user')!);
    this.orgName = user.orgName!;

    console.log(this.orgName);
    console.log(this.productObjective);
    console.log(this.productStep);
    console.log(this.date);
  }



}
