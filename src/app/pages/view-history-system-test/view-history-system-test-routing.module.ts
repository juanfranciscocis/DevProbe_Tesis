import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHistorySystemTestPage } from './view-history-system-test.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHistorySystemTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHistorySystemTestPageRoutingModule {}
