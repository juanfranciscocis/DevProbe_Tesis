import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RipeService} from "../../services/ripe.service";
import {User} from "../../interfaces/user";
import {Ripe} from "../../interfaces/ripe";

@Component({
  selector: 'app-latency-results',
  templateUrl: './latency-results.page.html',
  styleUrls: ['./latency-results.page.scss'],
})
export class LatencyResultsPage implements OnInit {


  @Input() description: string = '';
  orgName: string = '';
  productObjective:string = '';
  user:User = {};
  results:Ripe[] = [];

  constructor(
    private route: ActivatedRoute,
    private ripeService: RipeService,
  ) { }

  ngOnInit() {

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

    this.ripeService.getAllResults(this.orgName, this.productObjective, this.description).then(r => {
      // @ts-ignore
      for (let i = 0; i < r['data'].length; i++){
        // @ts-ignore
        this.results.push(r['data'][i]);
      }
      console.log(this.results);
    });

  }

  goToMap() {

  }
}
