import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentPostmortemPageRoutingModule } from './incident-postmortem-routing.module';

import { IncidentPostmortemPage } from './incident-postmortem.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IncidentPostmortemPageRoutingModule,
        ComponentsModule
    ],
  declarations: [IncidentPostmortemPage]
})
export class IncidentPostmortemPageModule {}
