import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadTestPageRoutingModule } from './load-test-routing.module';

import { LoadTestPage } from './load-test.page';
import {ComponentsModule} from "../../../components/components.module";
import {NgxEchartsDirective} from "ngx-echarts";
import {MarkdownComponent} from "ngx-markdown";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadTestPageRoutingModule,
    ComponentsModule,
    NgxEchartsDirective,
    MarkdownComponent
  ],
  declarations: [LoadTestPage]
})
export class LoadTestPageModule {}
