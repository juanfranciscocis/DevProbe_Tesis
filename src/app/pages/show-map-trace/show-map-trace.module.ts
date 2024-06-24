import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMapTracePageRoutingModule } from './show-map-trace-routing.module';

import { ShowMapTracePage } from './show-map-trace.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowMapTracePageRoutingModule,
        ComponentsModule
    ],
  declarations: [ShowMapTracePage]
})
export class ShowMapTracePageModule {}
