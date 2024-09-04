import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUnitTestPageRoutingModule } from './create-unit-test-routing.module';

import { CreateUnitTestPage } from './create-unit-test.page';
import {ComponentsModule} from "../../../../components/components.module";
import {MarkdownComponent} from "ngx-markdown";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUnitTestPageRoutingModule,
    ComponentsModule,
    MarkdownComponent
  ],
  declarations: [CreateUnitTestPage]
})
export class CreateUnitTestPageModule {}
