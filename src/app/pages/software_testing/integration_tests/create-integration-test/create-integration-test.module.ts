import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateIntegrationTestPageRoutingModule } from './create-integration-test-routing.module';

import { CreateIntegrationTestPage } from './create-integration-test.page';
import {ComponentsModule} from "../../../../components/components.module";
import {MarkdownComponent} from "ngx-markdown";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateIntegrationTestPageRoutingModule,
    ComponentsModule,
    MarkdownComponent
  ],
  declarations: [CreateIntegrationTestPage]
})
export class CreateIntegrationTestPageModule {}
