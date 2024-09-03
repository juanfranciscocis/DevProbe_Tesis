import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlameGraphComparePage } from './flame-graph-compare.page';

const routes: Routes = [
  {
    path: '',
    component: FlameGraphComparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlameGraphComparePageRoutingModule {}
