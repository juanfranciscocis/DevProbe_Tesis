import { Component, OnInit } from '@angular/core';
import {FlameGraphConfig} from "ngx-flamegraph";
import {RawData} from "ngx-flamegraph/lib/utils";


@Component({
  selector: 'app-flame-graph',
  templateUrl: './flame-graph.page.html',
  styleUrls: ['./flame-graph.page.scss'],
})
export class FlameGraphPage implements OnInit {

  // @ts-ignore
  config:FlameGraphConfig = {data }


  constructor() { }

  ngOnInit() {
  }



}

const data = [
  {
    label: 'root',
    value: 100,
    children: [
      {
        label: 'cpu_usage',
        value: 10,
        children: [
          {
            label: 'home',
            value: 40,
            children: []
          },
          {
            label: 'about us',
            value: 60,
            children: []
          }
        ]
      },
      {
        label: 'no_usage',
        value: 100,
        children: []
      },
    ]
  }
] as RawData[];
