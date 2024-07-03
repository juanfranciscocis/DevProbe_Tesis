import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphDataForPage } from './graph-data-for.page';

const routes: Routes = [
  {
    path: '',
    component: GraphDataForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphDataForPageRoutingModule {}
