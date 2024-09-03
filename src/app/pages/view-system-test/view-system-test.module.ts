import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSystemTestPageRoutingModule } from './view-system-test-routing.module';

import { ViewSystemTestPage } from './view-system-test.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewSystemTestPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ViewSystemTestPage]
})
export class ViewSystemTestPageModule {}
