import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSystemTestPage } from './view-system-test.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSystemTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSystemTestPageRoutingModule {}
