import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import {RipeService} from "../../services/ripe.service";



@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  options: EChartsOption|undefined;

  orgName: string = 'DevProbe';
  productObjective:string = 'Web';


  constructor(
    private ripeService: RipeService
  ) {}

  async ngOnInit(): Promise<void>{

    await this.ripeService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      for (let i = 0; i < r.length; i++){
        console.log(r[i]);
      }
    });


    const xAxisData = [];
    const data1: number[] = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
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
          animationDelay: idx => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }
}
