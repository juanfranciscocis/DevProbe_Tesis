import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlameGraphPageRoutingModule } from './flame-graph-routing.module';

import { FlameGraphPage } from './flame-graph.page';
import {NgxFlamegraphModule} from "ngx-flamegraph";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FlameGraphPageRoutingModule,
        NgxFlamegraphModule
    ],
  declarations: [FlameGraphPage]
})
export class FlameGraphPageModule {}
