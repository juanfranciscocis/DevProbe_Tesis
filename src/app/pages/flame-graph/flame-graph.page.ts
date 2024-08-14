import { Component, OnInit } from '@angular/core';
import {FlameGraphConfig} from "ngx-flamegraph";
import {RawData} from "ngx-flamegraph/lib/utils";
import {FlameGraphService} from "../../services/flame-graph.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../interfaces/product";


@Component({
  selector: 'app-flame-graph',
  templateUrl: './flame-graph.page.html',
  styleUrls: ['./flame-graph.page.scss'],
})
export class FlameGraphPage implements OnInit {

  product:Product = {}
  date:string = ''


  // @ts-ignore
  config:FlameGraphConfig = {data}


  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProductAndDateFromParams();
  }


  /**
   * This method gets the product and date from URL parameters.
   */
  getProductAndDateFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
      this.date = params['date'];
    });
    console.log(this.product.productObjective);
    console.log(this.date);

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
