import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraceTestPage } from './trace-test.page';

const routes: Routes = [
  {
    path: '',
    component: TraceTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraceTestPageRoutingModule {}
