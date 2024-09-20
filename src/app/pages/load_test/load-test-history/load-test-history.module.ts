import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadTestHistoryPageRoutingModule } from './load-test-history-routing.module';

import { LoadTestHistoryPage } from './load-test-history.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoadTestHistoryPageRoutingModule,
        ComponentsModule
    ],
  declarations: [LoadTestHistoryPage]
})
export class LoadTestHistoryPageModule {}
