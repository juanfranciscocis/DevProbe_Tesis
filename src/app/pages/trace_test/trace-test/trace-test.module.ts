import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraceTestPageRoutingModule } from './trace-test-routing.module';

import { TraceTestPage } from './trace-test.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TraceTestPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TraceTestPage]
})
export class TraceTestPageModule {}
