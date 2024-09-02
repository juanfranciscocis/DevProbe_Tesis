import { Component, OnInit } from '@angular/core';
import {FlameGraphConfig} from "ngx-flamegraph";
import {FlamegraphColor, RawData} from "ngx-flamegraph/lib/utils";
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
    data:FlameGraphConfig = {data}
    color: FlamegraphColor = {
      hue: [50, 0],
      saturation: [80, 80],
      lightness: [55, 60]
    };
    usage_type: string | null = '';

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
      this.usage_type = this.route.snapshot.queryParamMap.get('usage_type');
    });
    console.log(this.product.productObjective);
    console.log(this.date);
    console.log(this.usage_type);

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
    let flameGraph;
    if (this.usage_type === "memory_usage") {
      flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, this.date, true);
      this.color = {
        hue: [140, 100], // Green hue
        saturation: [60, 60],
        lightness: [ 60,30]
      };
    } else {
      flameGraph = await this.flameGraphService.getFlameGraphByDate(orgName, this.product.productObjective!, this.date);
      this.color = {
        hue: [50, 0],
        saturation: [80, 80],
        lightness: [55, 60]
      };
    }
    console.log("flame graph", flameGraph);

    let allRawData: RawData[] = [];
    let keys = [];

    for (let key in flameGraph) {
      // @ts-ignore
      const data_to_transform = flameGraph?.[key];

      //get the keys
      keys = Object.keys(data_to_transform);
      console.log('keys', keys);
      const lenKeys = keys.length;
      const valueKeys = 100 / lenKeys;

      for (let serv in keys) {
        const children: RawData[] = [];
        for (let i = 0; i < data_to_transform[keys[serv]].length; i++) {
          if (this.usage_type === "memory_usage") {
            children[i] = this.transformToRawDataMemory(data_to_transform[keys[serv]][i]);
          } else {
            children[i] = this.transformToRawDataCPU(data_to_transform[keys[serv]][i]);
          }
        }
        console.log('server1', children);
        const rawData: RawData = {
          label: keys[serv],
          value: valueKeys,
          children: [
            ...children
          ]
        };
        allRawData.push(rawData);
      }
      console.log('server', allRawData);
    }

    //Add the root node
    allRawData = [{
      label: "root",
      value: 100,
      children: allRawData
    }];

    this.data = { data: allRawData, color: this.color };
    console.log("final object", allRawData);

    await this.hideLoading();

  } catch (e) {
    console.log(e);
    await this.hideLoading();
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

  transformToRawDataCPU(json: any): RawData {
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
              children: this.transformToRawDataCPU(subValue).children
            };

            children.push(child);
          }
        } else {
          const childCpuUsage = value.cpu_usage ? this.average(value.cpu_usage) : 0;

          const child: RawData = {
            label: key,
            value: childCpuUsage,
            children: this.transformToRawDataCPU(value).children
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

  transformToRawDataMemory(json: any): RawData {
  const memoryUsage = json.memory_usage ? this.average(json.memory_usage) : 0;
  const children: RawData[] = [];

  // Loop through each key in the object
  for (const key in json) {
    if (key === "id" || key === "memory_usage") continue;

    const value = json[key];

    if (typeof value === 'object' && !Array.isArray(value)) {
      // If the key is "sub_services", handle its children directly
      if (key === "sub_services") {
        for (const subKey in value) {
          const subValue = value[subKey];
          const subMemoryUsage = subValue.memory_usage ? this.average(subValue.memory_usage) : 0;

          const child: RawData = {
            label: subKey,
            value: subMemoryUsage,
            children: this.transformToRawDataMemory(subValue).children
          };

          children.push(child);
        }
      } else {
        const childMemoryUsage = value.memory_usage ? this.average(value.memory_usage) : 0;

        const child: RawData = {
          label: key,
          value: childMemoryUsage,
          children: this.transformToRawDataMemory(value).children
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
    value: memoryUsage,
    children: children
  };
}


  async doRefresh($event: any) {
    await this.getFlameGraph();
    $event.target.complete();
  }
}

const data = [
  {
    label:"root",
    value: 100,
    children:[]
  }
] as RawData[];


