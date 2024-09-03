import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphDataForPageRoutingModule } from './graph-data-for-routing.module';

import { GraphDataForPage } from './graph-data-for.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GraphDataForPageRoutingModule,
        ComponentsModule
    ],
  declarations: [GraphDataForPage]
})
export class GraphDataForPageModule {}
