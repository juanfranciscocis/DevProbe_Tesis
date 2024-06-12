import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import {NgxEchartsDirective} from "ngx-echarts";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule,
    NgxEchartsDirective,
    ComponentsModule
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
