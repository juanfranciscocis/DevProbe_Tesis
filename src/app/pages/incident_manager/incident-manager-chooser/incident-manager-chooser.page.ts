import { Component, OnInit } from '@angular/core';
import {Product} from "../../../interfaces/product";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-incident-manager-chooser',
  templateUrl: './incident-manager-chooser.page.html',
  styleUrls: ['./incident-manager-chooser.page.scss'],
})
export class IncidentManagerChooserPage implements OnInit {

  products: Product[] = [];
  orgName: string = '';

  /**
   * @constructor
   * @param {ProductService} productService - The service to handle product operations.
   * @param {Router} router - The router object to handle routing operations.
   */
  constructor(
    private productService: ProductService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {
  }

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
    this.orgName = user.orgName!;
    this.products = await this.productService.getProducts(this.orgName);
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

  async navigateToLoadTest(product: Product, step: string) {
    await this.router.navigate(['/incident-manager', {orgName:this.orgName,productObjective: product.productObjective, step: step}]);
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
