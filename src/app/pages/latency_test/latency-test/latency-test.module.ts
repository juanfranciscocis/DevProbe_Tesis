import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatencyTestPageRoutingModule } from './latency-test-routing.module';

import { LatencyTestPage } from './latency-test.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatencyTestPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LatencyTestPage]
})
export class LatencyTestPageModule {}
