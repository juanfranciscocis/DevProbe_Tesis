import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelProductPage } from './model-product.page';

const routes: Routes = [
  {
    path: '',
    component: ModelProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelProductPageRoutingModule {}
