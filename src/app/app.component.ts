import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  menuItems = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
  ];

  constructor(private router: Router, private menuController: MenuController) {}

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
