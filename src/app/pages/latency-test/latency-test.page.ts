import {Component, Input, OnInit} from '@angular/core';
import {RipeService} from "../../services/ripe.service";

@Component({
  selector: 'app-latency-test',
  templateUrl: './latency-test.page.html',
  styleUrls: ['./latency-test.page.scss'],
})
export class LatencyTestPage implements OnInit {

  @Input() target: string = 'portfoliojuanfranciscocisneros.web.app';
  @Input() description: string = 'IONIC-TEST';
  @Input() type: string = 'ping';


  constructor(
    private ripeService: RipeService
  ) { }

  ngOnInit() {
  }

  async sendMeasurementRequest() {
    console.log(this.target, this.description, this.type);
    await this.ripeService.sendMeasurementRequest(this.target, this.description, this.type);
  }

  async getMeasurementResults() {
    let response = await this.ripeService.getMeasurementResults();
    console.log(response);
  }

  changeType($event: any) {
    this.type = $event.detail.value;
  }
}
