import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentDetailsPageRoutingModule } from './incident-details-routing.module';

import { IncidentDetailsPage } from './incident-details.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IncidentDetailsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [IncidentDetailsPage]
})
export class IncidentDetailsPageModule {}
