import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraceResultsPageRoutingModule } from './trace-results-routing.module';

import { TraceResultsPage } from './trace-results.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TraceResultsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TraceResultsPage]
})
export class TraceResultsPageModule {}
