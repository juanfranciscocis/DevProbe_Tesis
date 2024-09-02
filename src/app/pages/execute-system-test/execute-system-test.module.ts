import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecuteSystemTestPageRoutingModule } from './execute-system-test-routing.module';

import { ExecuteSystemTestPage } from './execute-system-test.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExecuteSystemTestPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ExecuteSystemTestPage]
})
export class ExecuteSystemTestPageModule {}
