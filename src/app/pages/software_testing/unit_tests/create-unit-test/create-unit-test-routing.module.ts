import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUnitTestPage } from './create-unit-test.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUnitTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUnitTestPageRoutingModule {}
