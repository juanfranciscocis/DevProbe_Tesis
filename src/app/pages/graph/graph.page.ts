import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import {RipeService} from "../../services/ripe.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../interfaces/user";



@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  options: EChartsOption|undefined;

  orgName: string = 'DevProbe';
  productObjective:string = 'Web';

  user:User = {}

  data: any[] = [];


  constructor(
    private ripeService: RipeService,
    private route: ActivatedRoute
  ) {}


  async ionViewWillEnter() {
    //get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
    });

    //get the user
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;




    await this.ripeService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      for (let i = 0; i < r.length; i++) {


        //split the id
        let id = r[i].id.split('-');
        let idString = id[1];

        let day = id[2];
        let month = id[3];
        let year = id[4];
        let date = month + '/' + day + '/' + year;

        let time = id[5];


        // @ts-ignore
        let historyData = r[i]['data']['data'];

        let toSave = {
          id: idString,
          data: historyData,
          date: date,
          time: time,
        }

        this.data.push(toSave);

      }
    }).then(() => {
      const xAxisData = [];
      const data1: number[] = [];
      for (let i = 0; i < this.data.length; i++) {


        xAxisData.push(this.data[i].date);
        for (let j = 0; j < this.data[i].data.length; j++) {
          data1.push(this.data[i].data[j].latency);
        }

        this.options = {
          legend: {
            data: ['bar', 'bar2'],
            align: 'left',
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
              show: false,
            },
          },
          yAxis: {},
          series: [
            {
              name: 'bar',
              type: 'bar',
              data: data1,
              animationDelay: i => i * 10,
            },
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: i => i * 5,
        };
      }
    });
  }

  async ngOnInit(): Promise<void>{
  }
}
