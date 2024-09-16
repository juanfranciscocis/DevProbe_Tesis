import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoadTestService} from "../../../services/load-test.service";

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.page.html',
  styleUrls: ['./load-test.page.scss'],
})
export class LoadTestPage implements OnInit {

  productStep: string = '';
  productObjective: string = '';
  orgName: string = '';



  target: string = '';
  description: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadTestService: LoadTestService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getParams();
    await this.getHistoryResults();
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


  async getHistoryResults() {
    await this.loadTestService.getLoadTestHistory(this.orgName, this.productObjective, this.productStep).then((data) => {
      console.log(data);
    });
  }







}
