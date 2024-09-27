import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentManagerPageRoutingModule } from './incident-manager-routing.module';

import { IncidentManagerPage } from './incident-manager.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IncidentManagerPageRoutingModule,
        ComponentsModule
    ],
  declarations: [IncidentManagerPage]
})
export class IncidentManagerPageModule {}
