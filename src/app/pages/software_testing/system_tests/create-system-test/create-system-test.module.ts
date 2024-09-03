import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSystemTestPageRoutingModule } from './create-system-test-routing.module';

import { CreateSystemTestPage } from './create-system-test.page';
import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateSystemTestPageRoutingModule,
        ComponentsModule
    ],
  declarations: [CreateSystemTestPage]
})
export class CreateSystemTestPageModule {}
