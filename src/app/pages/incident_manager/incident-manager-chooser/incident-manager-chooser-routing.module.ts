import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentManagerChooserPage } from './incident-manager-chooser.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentManagerChooserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentManagerChooserPageRoutingModule {}
