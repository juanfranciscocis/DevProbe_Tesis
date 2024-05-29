import {Component, Input, OnInit} from '@angular/core';

/**
 * TitleComponent is a component that represents a title in the application.
 * It contains a title that can be passed as an input property.
 *
 * @Component is a decorator that marks a class as an Angular component and provides configuration metadata.
 * The selector 'app-title' is the name you can use to embed this component in the template of other components.
 * The templateUrl './title.component.html' is the location of this component's template.
 * The styleUrls ['./title.component.scss'] is an array of stylesheet URLs for this component.
 */
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent  implements OnInit {

  /**
   * The title of the component. It's an input property, so it can be passed from a parent component.
   * If no title is passed, it defaults to 'Title'.
   *
   * @Input is a decorator that marks a class field as an input property and supplies configuration metadata.
   * The input property is bound to a DOM property in the template.
   */
  @Input() title: string = 'Title';

  /**
   * TitleComponent constructor.
   * It's a placeholder for any initialization logic for the component.
   */
  constructor() { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * It's a placeholder for any additional initialization logic for the component.
   */
  ngOnInit() {}

}
