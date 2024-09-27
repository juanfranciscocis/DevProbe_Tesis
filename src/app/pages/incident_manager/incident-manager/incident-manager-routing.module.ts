import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentManagerPage } from './incident-manager.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentManagerPageRoutingModule {}
