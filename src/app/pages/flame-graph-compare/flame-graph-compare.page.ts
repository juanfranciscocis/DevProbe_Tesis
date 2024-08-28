import { Component, OnInit } from '@angular/core';
import { RawData } from "ngx-flamegraph/lib/utils";
import { Product } from "../../interfaces/product";
import { FlameGraphService } from "../../services/flame-graph.service";
import { LoadingController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-flame-graph-compare',
  templateUrl: './flame-graph-compare.page.html',
  styleUrls: ['./flame-graph-compare.page.scss'],
})
export class FlameGraphComparePage implements OnInit {

  product: Product = {};
  datesForComparison: string[] = [];
  configurations: { [key: string]: { data: RawData[] } } = {};

  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getProductAndDatesFromParams();
    this.getFlameGraph();
  }



  async getFlameGraph() {
    try {
      await this.showLoading();
      const userString = localStorage.getItem('user');

      if (!userString) {
        return;
      }

      const user: User = JSON.parse(userString);
      const orgName: string = user.orgName!;
      console.log(orgName);

      this.configurations = {};

      for (const date of this.datesForComparison) {
        const flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, date);
        console.log(flameGraph);

        let allRawData: RawData[] = [];
        let keys = [];

        for (let key in flameGraph) {
          // @ts-ignore
          const data_to_transform = flameGraph?.[key];
          keys = Object.keys(data_to_transform);
          console.log('keys', keys);
          const lenKeys = keys.length;
          const valueKeys = 100 / lenKeys;

          for (let serv in keys) {
            const children: RawData[] = [];
            for (let i = 0; i < data_to_transform[keys[serv]].length; i++) {
              children[i] = this.transformToRawData(data_to_transform[keys[serv]][i]);
            }
            console.log('server1', children);
            const rawData: RawData = {
              label: keys[serv],
              value: valueKeys,
              children: [...children],
            };
            allRawData.push(rawData);
          }
          console.log('server', allRawData);
        }

        allRawData = [
          {
            label: 'root',
            value: 100,
            children: allRawData,
          },
        ];

        // Save the configuration for this date
        this.configurations[date] = { data: allRawData };
      }

      console.log('Final configurations', this.configurations);

      await this.hideLoading();
    } catch (e) {
      console.log(e);
      await this.hideLoading();
    }
  }

  /**
   * This method gets the product and date from URL parameters.
   */
  getProductAndDatesFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
      this.datesForComparison = JSON.parse(params['dates']);
    });
    console.log(this.product.productObjective);
    console.log(this.datesForComparison);

  }












  doRefresh($event: any) {

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
