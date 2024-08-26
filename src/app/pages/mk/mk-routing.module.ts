import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MkPage } from './mk.page';

const routes: Routes = [
  {
    path: '',
    component: MkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MkPageRoutingModule {}
