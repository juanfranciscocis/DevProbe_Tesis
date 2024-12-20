import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardPageRoutingModule } from './board-routing.module';

import { BoardPage } from './board.page';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardPageRoutingModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    ComponentsModule
  ],
  declarations: [BoardPage]
})
export class BoardPageModule {}
