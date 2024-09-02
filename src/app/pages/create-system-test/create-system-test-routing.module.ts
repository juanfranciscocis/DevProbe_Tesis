import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSystemTestPage } from './create-system-test.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSystemTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSystemTestPageRoutingModule {}
