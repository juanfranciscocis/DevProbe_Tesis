import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlameGraphForPage } from './flame-graph-for.page';

const routes: Routes = [
  {
    path: '',
    component: FlameGraphForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlameGraphForPageRoutingModule {}
