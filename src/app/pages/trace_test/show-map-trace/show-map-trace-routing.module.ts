import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMapTracePage } from './show-map-trace.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMapTracePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMapTracePageRoutingModule {}
