import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphTracePageRoutingModule } from './graph-trace-routing.module';

import { GraphTracePage } from './graph-trace.page';
import {ComponentsModule} from "../../components/components.module";
import {NgxEchartsDirective} from "ngx-echarts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphTracePageRoutingModule,
    ComponentsModule,
    NgxEchartsDirective
  ],
  declarations: [GraphTracePage]
})
export class GraphTracePageModule {}
