import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenderPageRoutingModule } from './render-routing.module';

import { RenderPage } from './render.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenderPageRoutingModule
  ],
  declarations: [RenderPage]
})
export class RenderPageModule {}
