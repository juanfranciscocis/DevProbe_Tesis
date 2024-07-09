import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { RipeService } from "../../services/ripe.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user";
import {Browser} from "leaflet";
import win = Browser.win;

@Component({
  selector: 'app-graph',
  templateUrl: './graph-latency.page.html',
  styleUrls: ['./graph-latency.page.scss'],
})
export class GraphLatencyPage implements OnInit {

  options: EChartsOption | undefined;
  orgName: string = '';
  productObjective: string = '';
  user: User = {};
  data: any[] = [];
  countries: string[] = [];
  countryOptions: { [key: string]: EChartsOption } = {};

  constructor(
    private ripeService: RipeService,
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

    this.getResultsHistoryforLatency().then(() => {
      this.groupByDate().then(() => {
        this.groupByCountry().then(() => {
          this.populateCountries();
          this.generateCountryOptions();
        });
      });
    });
  }

  async getResultsHistoryforLatency() {
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
          data: historyData,
          date: date,
          time: time,
        };
        this.data.push(toSave);
      }
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
        let country = data[i].countryFrom;
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

  generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateCountryOptions() {
    for (let country of this.countries) {
      const xAxisData = [];
      const data1: number[] = [];
      for (let date in this.data) {
        let sum = 0;
        let count = 0;
        if (this.data[date][country]) {
          for (let i = 0; i < this.data[date][country].length; i++) {
            sum += this.data[date][country][i].latency;
            count++;
          }
          if (count > 0) {
            xAxisData.push(date);
            data1.push(sum / count);
          }
        }
      }

      if (data1.length > 0) {  // Only create options if there is data
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
                color: this.generateRandomColor()
              },
              animationDelay: i => i * 10,
            },
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: i => i * 5,
        };
      }
    }
  }

  refresh() {
    window.location.reload();
  }

  ngOnInit(): void {}
}
