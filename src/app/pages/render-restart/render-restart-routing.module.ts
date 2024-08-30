import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenderRestartPage } from './render-restart.page';

const routes: Routes = [
  {
    path: '',
    component: RenderRestartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenderRestartPageRoutingModule {}
