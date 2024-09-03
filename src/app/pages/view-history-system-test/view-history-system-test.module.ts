import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHistorySystemTestPageRoutingModule } from './view-history-system-test-routing.module';

import { ViewHistorySystemTestPage } from './view-history-system-test.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewHistorySystemTestPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ViewHistorySystemTestPage]
})
export class ViewHistorySystemTestPageModule {}
