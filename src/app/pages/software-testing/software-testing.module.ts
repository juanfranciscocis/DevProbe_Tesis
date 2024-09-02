import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareTestingPageRoutingModule } from './software-testing-routing.module';

import { SoftwareTestingPage } from './software-testing.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwareTestingPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SoftwareTestingPage]
})
export class SoftwareTestingPageModule {}
