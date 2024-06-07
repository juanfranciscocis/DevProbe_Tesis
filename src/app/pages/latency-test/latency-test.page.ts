import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../services/ripe.service";
import {Ripe} from "../../interfaces/ripe";

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
    private ripeService: RipeService
  ) {

  }

  async ngOnInit() {
    await this.getResults();
  }

  sendRequest() {
    console.log(this.host, this.description, this.type);
    this.ripeService.sendMeasurementRequest(this.host, this.description, this.type);
  }

  async getResults() {
    (await this.ripeService.getMeasurementResults()).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let ripe: Ripe = {
          latency: data[i].avg,
          dst_addr: data[i].dst_addr,
          from: data[i].from,
        }
        this.ripeResults.push(ripe);
        console.log(ripe);
      }
    });
  }

  handleChange($event: any) {
    this.type = $event.detail.value;
  }
}
