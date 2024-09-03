import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMapPageRoutingModule } from './show-map-routing.module';

import { ShowMapPage } from './show-map.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowMapPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ShowMapPage]
})
export class ShowMapPageModule {}
