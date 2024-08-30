import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BoardPage } from './board.page';
import {BoardPageModule} from "./board.module";

const routes: Routes = [
  {
    path: '',
    component: BoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), DragDropModule],
  exports: [RouterModule],
})
export class BoardPageRoutingModule {}
