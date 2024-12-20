import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProductPageRoutingModule } from './view-product-routing.module';

import { ViewProductPage } from './view-product.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewProductPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ViewProductPage]
})
export class ViewProductPageModule {}
