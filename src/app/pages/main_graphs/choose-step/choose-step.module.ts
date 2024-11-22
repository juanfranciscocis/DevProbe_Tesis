import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseStepPageRoutingModule } from './choose-step-routing.module';

import { ChooseStepPage } from './choose-step.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChooseStepPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ChooseStepPage]
})
export class ChooseStepPageModule {}
