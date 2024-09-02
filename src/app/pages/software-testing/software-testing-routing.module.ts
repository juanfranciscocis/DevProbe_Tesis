import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareTestingPage } from './software-testing.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareTestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareTestingPageRoutingModule {}
