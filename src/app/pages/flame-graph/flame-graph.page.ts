import { Component, OnInit } from '@angular/core';
import {FlameGraphConfig} from "ngx-flamegraph";
import {RawData} from "ngx-flamegraph/lib/utils";
import {FlameGraphService} from "../../services/flame-graph.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../interfaces/product";
import {User} from "../../interfaces/user";




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

    ionViewWillEnter() {
        this.getProductAndDateFromParams();
        this.getFlameGraph();
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

  async getFlameGraph() {
    try {
      await this.showLoading()
      const userString = localStorage.getItem('user');

      if (!userString) {
        return;
      }

      const user: User = JSON.parse(userString);
      const orgName:string = user.orgName!;
      console.log(orgName);

      const flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, this.date);
      console.log(flameGraph);

      let allRawData: RawData[] = [];
      let keys = [];

      for (let key in flameGraph) {
        // @ts-ignore
        const data_to_transform = flameGraph?.[key];

        //get the keys
        keys = Object.keys(data_to_transform);
        console.log('keys',keys);
        const lenKeys = keys.length;
        const valueKeys = 100/lenKeys;

        for (let serv in keys){
            const children:RawData[] = [];
            for(let i = 0; i < data_to_transform[keys[serv]].length; i++){
                children[i] = this.transformToRawData(data_to_transform[keys[serv]][i])
            }
            console.log('server1',children);
        const rawData: RawData = {
            label: keys[serv],
            value: valueKeys,
            children: [
                ...children
            ]
            };
            allRawData.push(rawData);


        }
        console.log('server',allRawData);


      }






      //Add the root node
      allRawData = [{
        label: "root",
        value: 100,
        children: allRawData
      }];


      this.config = {data: allRawData};
      console.log("final object",allRawData);









      await this.hideLoading();





      } catch (e) {
      console.log(e);
    }
  }

  /**
   * Show a loading spinner.
   */
  async showLoading() {
    const loading = await this.loadingCtrl.create({
    });
    await loading.present();
  }

  /**
   * Hide the loading spinner.
   */
  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }


  ngOnInit(): void {
  }

  average(values: string[]): number {
    const numbers = values.map(Number);
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }

  transformToRawData(json: any): RawData {
    const cpuUsage = json.cpu_usage ? this.average(json.cpu_usage) : 0;
    const children: RawData[] = [];

    // Loop through each key in the object
    for (const key in json) {
      if (key === "id" || key === "cpu_usage") continue;

      const value = json[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        // If the key is "sub_services", handle its children directly
        if (key === "sub_services") {
          for (const subKey in value) {
            const subValue = value[subKey];
            const subCpuUsage = subValue.cpu_usage ? this.average(subValue.cpu_usage) : 0;

            const child: RawData = {
              label: subKey,
              value: subCpuUsage,
              children: this.transformToRawData(subValue).children
            };

            children.push(child);
          }
        } else {
          const childCpuUsage = value.cpu_usage ? this.average(value.cpu_usage) : 0;

          const child: RawData = {
            label: key,
            value: childCpuUsage,
            children: this.transformToRawData(value).children
          };

          children.push(child);
        }
      } else if (typeof value !== 'object') {
        children.push({
          label: key,
          value: 0,
          children: []
        });
      }
    }

    return {
      label: json.id,
      value: cpuUsage,
      children: children
    };
  }






}

const data = [
  {
    label:"root",
    value: 100,
    children:[]
  }
] as RawData[];


