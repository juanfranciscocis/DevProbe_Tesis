import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {User} from "./interfaces/user";

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
   * The user object.
   */
  user: User = {} as User;

  /**
   * An array of menu items. Each item is an object with 'title', 'url', and 'icon' properties.
   */
  menuItems = [
    {
      title: 'Analytics',
      url: '/home',
      icon: 'analytics'
    },
    {
      title: 'Model The Product',
      url: '/model-product',
      icon: 'cube'
    },
    {
      title:'Latency Test',
      url:'/latency-chooser',
      icon:'pulse'
    },
    {
      title:'Trace Test',
      url:'/trace-chooser',
      icon:'globe'
    },
    {
      title: 'CPU Usage',
      url: '/flame-graph-for',
      params: { usage_type: 'cpu' },
      icon: 'stats-chart'
    },
    {
      title: 'Memory Usage',
      url: '/flame-graph-for',
      params: { usage_type: 'memory_usage' },
      icon: 'swap-horizontal'
    },
    {
      title: 'Software Testing',
      url: '/software-testing',
      icon: 'flask'
    },
    {
      title:'Load Test',
      url:'/load-test-chooser',
      icon:'barbell'
    },
    {
      title:'Incident Manager',
      url:'/incident-manager-chooser',
      icon:'alert-circle'
    },
    {
      title: 'My Team',
      url: '/myteam',
      icon: 'people'
    },
    {
      title:'Settings',
      url:'/settings',
      icon:'settings'
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
          this.getUser();
          this.menuController.enable(true);
        }
      }
    });
    this.getUser();
  }

  ionViewWillEnter() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Disable the menu on Login and Register pages
        if (event.urlAfterRedirects.includes('/login') || event.urlAfterRedirects.includes('/register')) {
          this.menuController.enable(false);
        } else {
          this.getUser();
          this.menuController.enable(true);
        }
      }
    });
    this.getUser();
  }

  navigate(item: any) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([item.url], { queryParams: item.params || {} });
      });
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.user = user;
  }
}
