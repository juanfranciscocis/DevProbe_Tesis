import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatencyResultsPage } from './latency-results.page';

const routes: Routes = [
  {
    path: '',
    component: LatencyResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatencyResultsPageRoutingModule {}
