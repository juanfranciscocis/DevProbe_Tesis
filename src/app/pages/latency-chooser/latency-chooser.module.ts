import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatencyChooserPageRoutingModule } from './latency-chooser-routing.module';

import { LatencyChooserPage } from './latency-chooser.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LatencyChooserPageRoutingModule,
        ComponentsModule
    ],
  declarations: [LatencyChooserPage]
})
export class LatencyChooserPageModule {}
