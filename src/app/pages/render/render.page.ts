import { Component, OnInit } from '@angular/core';
import {RenderRestartService} from "../../services/render-restart.service";

@Component({
  selector: 'app-render',
  templateUrl: './render.page.html',
  styleUrls: ['./render.page.scss'],
})
export class RenderPage implements OnInit {

  response: any = {};

  constructor(
    private renderRestartService: RenderRestartService
  ) { }

  async ngOnInit() {
    this.response = await this.renderRestartService.restartService();
  }

}
