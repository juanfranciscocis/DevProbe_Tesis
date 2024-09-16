import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadTestChooserPage } from './load-test-chooser.page';

const routes: Routes = [
  {
    path: '',
    component: LoadTestChooserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadTestChooserPageRoutingModule {}
