import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatencyChooserPage } from './latency-chooser.page';

const routes: Routes = [
  {
    path: '',
    component: LatencyChooserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatencyChooserPageRoutingModule {}
