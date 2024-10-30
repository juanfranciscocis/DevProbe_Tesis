import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentPostmortemPage } from './incident-postmortem.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentPostmortemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentPostmortemPageRoutingModule {}
