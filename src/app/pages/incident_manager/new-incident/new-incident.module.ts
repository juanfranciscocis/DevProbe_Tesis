import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewIncidentPageRoutingModule } from './new-incident-routing.module';

import { NewIncidentPage } from './new-incident.page';
import {ComponentsModule} from "../../../components/components.module";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewIncidentPageRoutingModule,
        ComponentsModule,
        CdkDrag,
        CdkDropList,
        CdkDropListGroup
    ],
  declarations: [NewIncidentPage]
})
export class NewIncidentPageModule {}
