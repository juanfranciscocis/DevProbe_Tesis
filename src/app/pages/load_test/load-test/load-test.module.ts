import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadTestPageRoutingModule } from './load-test-routing.module';

import { LoadTestPage } from './load-test.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadTestPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoadTestPage]
})
export class LoadTestPageModule {}
