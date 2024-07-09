import { Component, OnInit } from '@angular/core';
import type {EChartsOption} from "echarts";
import {User} from "../../interfaces/user";
import {RipeService} from "../../services/ripe.service";
import {ActivatedRoute} from "@angular/router";
import {RipeTraceService} from "../../services/ripe-trace.service";
import {refresh} from "ionicons/icons";

@Component({
  selector: 'app-graph-trace',
  templateUrl: './graph-trace.page.html',
  styleUrls: ['./graph-trace.page.scss'],
})
export class GraphTracePage implements OnInit {

  options: EChartsOption | undefined;
  orgName: string = '';
  productObjective: string = '';
  user: User = {};
  data: any[] = [];
  countries: string[] = [];
  countryOptions: { [key: string]: EChartsOption } = {};

  constructor(
    private ripeService: RipeTraceService,
    private route: ActivatedRoute
  ) {}

  async ionViewWillEnter() {

    // get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
    });

    // get the user
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    this.user = JSON.parse(userString);
    this.orgName = this.user.orgName!;

    this.data = [];

    this.getResultsHistoryforRtt().then(() => {
      this.groupByDate().then(() => {
        this.groupByCountry().then(() => {
          this.populateCountries();
          this.generateCountryOptions();
        });
      });
    });
  }

  async getResultsHistoryforRtt() {
    await this.ripeService.getHistoryResults(this.orgName, this.productObjective).then(r => {
      for (let i = 0; i < r.length; i++) {
        // split the id
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
          date: date,
          time: time,
          data: historyData
        };
        this.data.push(toSave);
      }
      console.log(this.data);
    });
  }

  async groupByDate() {
    // create a dictionary to group the data by date
    let groupedData: any = {};
    for (let i = 0; i < this.data.length; i++) {
      let date = this.data[i].date;
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      groupedData[date].push(...this.data[i]['data']);
    }
    this.data = groupedData;
    console.log(this.data);
  }

  async groupByCountry() {
    let groupedData: any = {};
    for (let date in this.data) {
      let data = this.data[date];
      if (!groupedData[date]) {
        groupedData[date] = {};
      }
      for (let i = 0; i < data.length; i++) {
        let country = data[i].src_country;
        //if the country == No country found, then ignore
        if (country === 'No country found') {
          continue;
        }
        if (!groupedData[date][country]) {
          groupedData[date][country] = [];
        }
        groupedData[date][country].push(data[i]);
      }
    }
    this.data = groupedData;
    console.log(this.data);
  }

  async populateCountries() {
    const countriesSet = new Set<string>();
    for (let date in this.data) {
      for (let country in this.data[date]) {
        countriesSet.add(country);
      }
    }
    this.countries = Array.from(countriesSet);
    console.log(this.countries);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateCountryOptions() {
    for (let country of this.countries) {
      const xAxisData: string[] = [];
      const data1: number[] = [];
      for (let date in this.data) {
        let sum = 0;
        let count = 0;
        if (this.data[date][country]) {
          for (let i = 0; i < this.data[date][country].length; i++) {
            let data = this.data[date][country][i];
            for (let j = 0; j < data.result.length; j++) {
              // Check if the rtt is a number and not undefined
              if (typeof data.result[j].result[0].rtt === 'number') {
                sum += data.result[j].result[0].rtt;
                count++;
              }
            }
          }
          if (count > 0) { // Only add dates with data
            xAxisData.push(date);
            data1.push(sum / count);  // Calculate average RTT for the country on this date
          }
        }
      }

      const randomColor = this.getRandomColor();

      this.countryOptions[country] = {
        legend: {
          data: [country],
          align: 'left',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
            name: country,
            type: 'bar',
            data: data1,
            itemStyle: {
              color: randomColor,
            },
            animationDelay: i => i * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: i => i * 5,
      };
    }
  }

  refresh() {
    window.location.reload();
  }

  ngOnInit() {
  }

}
