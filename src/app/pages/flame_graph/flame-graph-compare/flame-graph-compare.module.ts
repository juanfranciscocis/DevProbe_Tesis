import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlameGraphComparePageRoutingModule } from './flame-graph-compare-routing.module';

import { FlameGraphComparePage } from './flame-graph-compare.page';
import {ComponentsModule} from "../../../components/components.module";
import {NgxFlamegraphModule} from "ngx-flamegraph";
import {MarkdownComponent} from "ngx-markdown";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FlameGraphComparePageRoutingModule,
        ComponentsModule,
        NgxFlamegraphModule,
        MarkdownComponent
    ],
  declarations: [FlameGraphComparePage]
})
export class FlameGraphComparePageModule {}
