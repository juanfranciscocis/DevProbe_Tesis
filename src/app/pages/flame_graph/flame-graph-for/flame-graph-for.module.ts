import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlameGraphForPageRoutingModule } from './flame-graph-for-routing.module';

import { FlameGraphForPage } from './flame-graph-for.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FlameGraphForPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FlameGraphForPage]
})
export class FlameGraphForPageModule {}
