import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlameGraphDatePage } from './flame-graph-date.page';

const routes: Routes = [
  {
    path: '',
    component: FlameGraphDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlameGraphDatePageRoutingModule {}
