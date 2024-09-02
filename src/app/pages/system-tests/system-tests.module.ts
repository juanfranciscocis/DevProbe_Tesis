import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemTestsPageRoutingModule } from './system-tests-routing.module';

import { SystemTestsPage } from './system-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemTestsPageRoutingModule
  ],
  declarations: [SystemTestsPage]
})
export class SystemTestsPageModule {}
