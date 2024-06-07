import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../services/ripe.service";
import {Ripe} from "../../interfaces/ripe";
import {User} from "../../interfaces/user";
import {TeamsService} from "../../services/teams.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-latency-test',
  templateUrl: './latency-test.page.html',
  styleUrls: ['./latency-test.page.scss'],
})
export class LatencyTestPage implements OnInit {

  @Input() host: string = 'portfoliojuanfranciscocisneros.web.app';
  @Input() description: string = 'NEW IONIC';
  type: string = 'ping';

  ripeResults:Ripe[] = [];

  constructor(
    private ripeService: RipeService,
    private teamsService: TeamsService,
    private loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
  }

  async sendRequest() {
    await this.showLoading();
    console.log(this.host, this.description, this.type);
    await this.ripeService.sendMeasurementRequest(this.host, this.description, this.type);
    await this.hideLoading();
  }

  async getResults() {

    await this.showLoading();
    this.ripeResults = [];
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    const orgName = user.orgName!;


    (await this.ripeService.getMeasurementResults()).subscribe(async (data) => {
      for (let i = 0; i < data.length; i++) {
        let ripe: Ripe = {
          latency: data[i].avg,
          dst_addr: data[i].dst_addr,
          from: data[i].from,
        }
        this.ripeResults.push(ripe);
        //TODO:Prodcut Objective
      }
      await this.ripeService.saveMeasurementResults(orgName, "Web", this.description, this.ripeResults);
    });
    await this.hideLoading();
  }

  handleChange($event: any) {
    this.type = $event.detail.value;
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


}
