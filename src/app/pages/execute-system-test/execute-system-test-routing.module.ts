import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecuteSystemTestPage } from './execute-system-test.page';

const routes: Routes = [
  {
    path: '',
    component: ExecuteSystemTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecuteSystemTestPageRoutingModule {}
