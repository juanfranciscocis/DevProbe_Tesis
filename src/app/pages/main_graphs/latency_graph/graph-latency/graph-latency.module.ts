import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-latency-routing.module';

import { GraphLatencyPage } from './graph-latency.page';
import {NgxEchartsDirective} from "ngx-echarts";
import {ComponentsModule} from "../../../../components/components.module";
import {MarkdownComponent} from "ngx-markdown";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GraphPageRoutingModule,
        NgxEchartsDirective,
        ComponentsModule,
        MarkdownComponent
    ],
  declarations: [GraphLatencyPage]
})
export class GraphPageModule {}
