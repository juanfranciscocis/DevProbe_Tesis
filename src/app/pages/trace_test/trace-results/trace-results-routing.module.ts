import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraceResultsPage } from './trace-results.page';

const routes: Routes = [
  {
    path: '',
    component: TraceResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraceResultsPageRoutingModule {}
