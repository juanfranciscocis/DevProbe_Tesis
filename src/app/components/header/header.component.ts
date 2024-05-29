import {Component, Input, OnInit} from '@angular/core';

/**
 * HeaderComponent is a component that represents the header of the application.
 * It contains a title that can be passed as an input property.
 *
 * @Component is a decorator that marks a class as an Angular component and provides configuration metadata.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  /**
   * The title of the header. It's an input property, so it can be passed from a parent component.
   * If no title is passed, it defaults to 'Header Title'.
   *
   * @Input is a decorator that marks a class field as an input property and supplies configuration metadata.
   * The input property is bound to a DOM property in the template.
   */
  @Input() title: string = 'Header Title';

  /**
   * HeaderComponent constructor.
   * It's a placeholder for any initialization logic for the component.
   */
  constructor() { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * It's a placeholder for any additional initialization logic for the component.
   */
  ngOnInit() {}

}
