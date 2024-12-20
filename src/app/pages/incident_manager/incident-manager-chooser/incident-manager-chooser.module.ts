import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentManagerChooserPageRoutingModule } from './incident-manager-chooser-routing.module';

import { IncidentManagerChooserPage } from './incident-manager-chooser.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IncidentManagerChooserPageRoutingModule,
        ComponentsModule
    ],
  declarations: [IncidentManagerChooserPage]
})
export class IncidentManagerChooserPageModule {}
