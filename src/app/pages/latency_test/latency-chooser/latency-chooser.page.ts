/**
 * @fileoverview This file contains the LatencyChooserPage component which is responsible for handling the product selection for latency testing.
 */

import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {User} from "../../../interfaces/user";
import {Product} from "../../../interfaces/product";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

/**
 * @component LatencyChooserPage
 * @description This component handles the product selection for latency testing.
 */
@Component({
  selector: 'app-latency-chooser',
  templateUrl: './latency-chooser.page.html',
  styleUrls: ['./latency-chooser.page.scss'],
})
export class LatencyChooserPage implements OnInit {

  /**
   * @property {Product[]} products - The list of products, initialized as an empty array.
   */
  products: Product[] = [];

  /**
   * @constructor
   * @param {ProductService} productService - The service to handle product operations.
   * @param {Router} router - The router object to handle routing operations.
   */
  constructor(
    private productService: ProductService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  /**
   * @method ngOnInit
   * @description Lifecycle hook that is called after data-bound properties of a directive are initialized.
   */
  ngOnInit() {
  }

  /**
   * @method ionViewWillEnter
   * @description Lifecycle hook that is called when the page is about to enter and become the active page.
   */
  async ionViewWillEnter() {
    await this.showLoading();
    this.getAllProducts();
    await this.hideLoading();
  }

  /**
   * @method getAllProducts
   * @description Fetches all products for the current user's organization.
   */
  async getAllProducts(){
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    const orgName = user.orgName!;
    this.products = await this.productService.getProducts(orgName);
  }

  /**
   * @method doRefresh
   * @description Refreshes the product list.
   * @param {any} $event - The event object.
   */
  async doRefresh($event: any) {
    this.getAllProducts().then(() => {
      $event.target.complete();
    });
  }

  /**
   * @method navigateToLatencyTest
   * @description Navigates to the latency test page for the selected product and step.
   * @param {Product} product - The selected product.
   * @param {string} step - The selected step.
   */
  async navigateToLatencyTest(product: Product, step: string) {
    await this.router.navigate(['/latency-test', {productObjective: product.productObjective, step: step}]);
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


}
