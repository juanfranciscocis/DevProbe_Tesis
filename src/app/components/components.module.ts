import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {TitleComponent} from "./title/title.component";

/**
 * ComponentsModule is a module that declares and exports the components used in the application.
 *
 * @NgModule is a decorator that marks a class as an Angular module and provides configuration metadata.
 */
@NgModule({
  /**
   * The components that belong to this module.
   */
  declarations: [
    HeaderComponent,
    TitleComponent,
  ],
  /**
   * Other modules whose exported classes are needed by component templates declared in this module.
   */
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
  ],
  /**
   * The subset of declarations that should be visible and usable in the component templates of other modules.
   */
  exports: [
    HeaderComponent,
    TitleComponent,
  ]
})
export class ComponentsModule { }
