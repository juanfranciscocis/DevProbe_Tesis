import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MkPageRoutingModule } from './mk-routing.module';

import { MkPage } from './mk.page';
import {LMarkdownEditorModule} from "ngx-markdown-editor";
import {ClipboardButtonComponent, MarkdownComponent, MarkdownPipe} from "ngx-markdown";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MkPageRoutingModule,
    LMarkdownEditorModule,
    MarkdownComponent,
    ClipboardButtonComponent,
    MarkdownPipe
  ],
  declarations: [MkPage]
})
export class MkPageModule {}
