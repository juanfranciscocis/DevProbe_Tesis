import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadTestHistoryPage } from './load-test-history.page';

const routes: Routes = [
  {
    path: '',
    component: LoadTestHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadTestHistoryPageRoutingModule {}
