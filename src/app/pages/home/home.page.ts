import { Component } from '@angular/core';
import {logOut} from "ionicons/icons";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products:Product[] = [];

  constructor(
    private authService:AuthService,
    private router:Router,
    private productService:ProductService,
    private loadingCtrl:LoadingController
  ) {}

  async ionViewWillEnter() {
    try {
      await this.showLoading()
      const userString = localStorage.getItem('user');

      if (!userString) {
        return;
      }

      const user: User = JSON.parse(userString);
      const orgName: string = user.orgName!;
      this.products = await this.productService.getProducts(orgName);

      //if no products, add a default product
      if (this.products.length === 0) {
        const new_product: Product = {
          productObjective: 'No products found',
        }
        this.products.push(new_product);
      }

      console.log(this.products);


      await this.hideLoading()
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    await this.authService.logoutUser();
    await this.router.navigate(['/login']);
  }




  /**
   * Show a loading spinner.
   */
  async showLoading() {
    const loading = await this.loadingCtrl.create({
    });
    await loading.present();
  }

  /**
   * Hide the loading spinner.
   */
  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }


  goToProduct(productObjective: string | undefined) {
    this.router.navigate(['/graph-data-for'], {queryParams: {product: productObjective}});
  }
}
