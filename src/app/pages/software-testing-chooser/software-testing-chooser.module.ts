import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareTestingChooserPageRoutingModule } from './software-testing-chooser-routing.module';

import { SoftwareTestingChooserPage } from './software-testing-chooser.page';
import {ComponentsModule} from "../../components/components.module";
import {NgxEchartsDirective} from "ngx-echarts";
import {GraphPageRoutingModule} from "../graph-latency/graph-latency-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwareTestingChooserPageRoutingModule,
        ComponentsModule,
        NgxEchartsDirective,
    ],
  declarations: [SoftwareTestingChooserPage]
})
export class SoftwareTestingChooserPageModule {}
