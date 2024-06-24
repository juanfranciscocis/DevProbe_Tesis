import { Component, OnInit } from '@angular/core';
import {Traceroute} from "../../classes/traceroute";
import {RipeTraceService} from "../../services/ripe-trace.service";
import {User} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {LocationTraceService} from "../../services/location-trace.service";

@Component({
  selector: 'app-trace-results',
  templateUrl: './trace-results.page.html',
  styleUrls: ['./trace-results.page.scss'],
})
export class TraceResultsPage implements OnInit {

  results: Traceroute[] = [
    {
      from: 'USA',
    }
  ];

  description: string = '';
  productObjective: string = '';
  orgName: string = '';


  constructor(
    private ripeTraceService: RipeTraceService,
    private route: ActivatedRoute,
    private locationTraceService: LocationTraceService
  ) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.description = params['description'];
      this.productObjective = params['productObjective'];
    });


    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    this.orgName = user.orgName!;


    await this.ripeTraceService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      let res = [];
      // @ts-ignore
      for (let i = 0; i < r.length; i++) {
        // @ts-ignore
        if (r[i]['id'] == this.description) {
          // @ts-ignore
          res.push(r[i]['data']['data']);
        }
      }
      this.results = res[0]
      console.log(this.results);
    });


  }

  getMoreResults() {

  }

  goToMap() {

  }
}
