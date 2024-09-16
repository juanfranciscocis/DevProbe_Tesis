import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadTestPage } from './load-test.page';

const routes: Routes = [
  {
    path: '',
    component: LoadTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadTestPageRoutingModule {}
