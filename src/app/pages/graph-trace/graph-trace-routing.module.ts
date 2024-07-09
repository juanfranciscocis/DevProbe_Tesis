import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphTracePage } from './graph-trace.page';

const routes: Routes = [
  {
    path: '',
    component: GraphTracePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphTracePageRoutingModule {}
