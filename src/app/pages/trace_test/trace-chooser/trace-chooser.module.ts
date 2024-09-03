import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraceChooserPageRoutingModule } from './trace-chooser-routing.module';

import { TraceChooserPage } from './trace-chooser.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TraceChooserPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TraceChooserPage]
})
export class TraceChooserPageModule {}
