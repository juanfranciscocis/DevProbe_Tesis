import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelProductPageRoutingModule } from './model-product-routing.module';

import { ModelProductPage } from './model-product.page';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModelProductPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ModelProductPage]
})
export class ModelProductPageModule {}
