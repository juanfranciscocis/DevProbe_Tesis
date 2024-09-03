import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatencyResultsPageRoutingModule } from './latency-results-routing.module';

import { LatencyResultsPage } from './latency-results.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LatencyResultsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [LatencyResultsPage]
})
export class LatencyResultsPageModule {}
