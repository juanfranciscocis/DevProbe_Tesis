import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseStepPage } from './choose-step.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseStepPageRoutingModule {}
