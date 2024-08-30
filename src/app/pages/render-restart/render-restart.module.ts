import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenderRestartPageRoutingModule } from './render-restart-routing.module';

import { RenderRestartPage } from './render-restart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenderRestartPageRoutingModule
  ],
  declarations: [RenderRestartPage]
})
export class RenderRestartPageModule {}
