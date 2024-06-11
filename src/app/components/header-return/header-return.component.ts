import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-header-return',
  templateUrl: './header-return.component.html',
  styleUrls: ['./header-return.component.scss'],
})
export class HeaderReturnComponent  implements OnInit {

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
   * @param {Location} location - The location object, which is an Angular service that interacts with the browser's URL.
   */
  constructor(
    private location: Location,
  ) { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * It's a placeholder for any additional initialization logic for the component.
   */
  ngOnInit() {}



  goBack() {
    //go to the previous pag
    this.location.back();
  }

}
