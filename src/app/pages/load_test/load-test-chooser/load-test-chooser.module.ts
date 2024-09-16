import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadTestChooserPageRoutingModule } from './load-test-chooser-routing.module';

import { LoadTestChooserPage } from './load-test-chooser.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadTestChooserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoadTestChooserPage]
})
export class LoadTestChooserPageModule {}
