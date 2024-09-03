import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlameGraphPage } from './flame-graph.page';

const routes: Routes = [
  {
    path: '',
    component: FlameGraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlameGraphPageRoutingModule {}
