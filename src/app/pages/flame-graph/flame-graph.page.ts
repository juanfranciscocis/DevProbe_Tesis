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
    "label": "BDD",
    "value": 22,
    "children": [
      {
        "label": "SubService1",
        "value": 50,
        "children": [
          {
            "label": "SubSub1",
            "value": 100,
            "children": [
              {
                "label": "SubSubSub2",
                "value": 75,
                "children": []
              },
              {
                "label": "SubSubSub1",
                "value": 25,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "label": "SubService2",
        "value": 80,
        "children": []
      }
    ]
  },
  {
    "label": "BDD2",
    "value": 22,
    "children": [
      {
        "label": "SubService1",
        "value": 50,
        "children": [
          {
            "label": "SubSub1",
            "value": 100,
            "children": [
              {
                "label": "SubSubSub2",
                "value": 69.44444444444444,
                "children": []
              },
              {
                "label": "SubSubSub1",
                "value": 30.555555555555557,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "label": "SubService2",
        "value": 71.11111111111111,
        "children": []
      }
    ]
  }

] as RawData[];
