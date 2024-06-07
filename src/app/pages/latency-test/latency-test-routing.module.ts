import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatencyTestPage } from './latency-test.page';

const routes: Routes = [
  {
    path: '',
    component: LatencyTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatencyTestPageRoutingModule {}
