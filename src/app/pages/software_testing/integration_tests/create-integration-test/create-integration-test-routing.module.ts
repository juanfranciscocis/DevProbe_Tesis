import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateIntegrationTestPage } from './create-integration-test.page';

const routes: Routes = [
  {
    path: '',
    component: CreateIntegrationTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateIntegrationTestPageRoutingModule {}
