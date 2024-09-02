import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftwareTestingChooserPageRoutingModule } from './software-testing-chooser-routing.module';

import { SoftwareTestingChooserPage } from './software-testing-chooser.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwareTestingChooserPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SoftwareTestingChooserPage]
})
export class SoftwareTestingChooserPageModule {}
