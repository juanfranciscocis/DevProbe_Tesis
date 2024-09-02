import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareTestingChooserPage } from './software-testing-chooser.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareTestingChooserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareTestingChooserPageRoutingModule {}
