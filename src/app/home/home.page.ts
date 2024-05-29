import { Component } from '@angular/core';
import {logOut} from "ionicons/icons";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService:AuthService,
    private router:Router
  ) {}

  async logout() {
    await this.authService.logoutUser();
    await this.router.navigate(['/login']);
  }

  protected readonly logOut = logOut;
}
