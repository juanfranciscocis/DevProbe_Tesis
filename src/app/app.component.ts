import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

/**
 * AppComponent is the root component of the application.
 * It contains the logic for enabling and disabling the side menu based on the current route.
 *
 * @Component is a decorator that marks a class as an Angular component and provides configuration metadata.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * An array of menu items. Each item is an object with 'title', 'url', and 'icon' properties.
   */
  menuItems = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Team',
      url: '/myteam',
      icon: 'people'
    },
    {
      title: 'Model The Product',
      url: '/model-product',
      icon: 'cube'
    }
  ];

  /**
   * AppComponent constructor.
   *
   * @param {Router} router - The Angular Router instance.
   * @param {MenuController} menuController - The Ionic MenuController instance.
   */
  constructor(private router: Router, private menuController: MenuController) {}

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Here, it subscribes to the router events and enables or disables the side menu based on the current route.
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Disable the menu on Login and Register pages
        if (event.urlAfterRedirects.includes('/login') || event.urlAfterRedirects.includes('/register')) {
          this.menuController.enable(false);
        } else {
          this.menuController.enable(true);
        }
      }
    });
  }
}
