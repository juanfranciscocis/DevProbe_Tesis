import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlameGraphDatePageRoutingModule } from './flame-graph-date-routing.module';

import { FlameGraphDatePage } from './flame-graph-date.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FlameGraphDatePageRoutingModule,
        ComponentsModule
    ],
  declarations: [FlameGraphDatePage]
})
export class FlameGraphDatePageModule {}
