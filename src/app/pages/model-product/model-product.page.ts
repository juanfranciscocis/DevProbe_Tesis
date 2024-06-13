import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";
import {User} from "../../interfaces/user";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-model-product',
  templateUrl: './model-product.page.html',
  styleUrls: ['./model-product.page.scss'],
})
export class ModelProductPage implements OnInit {

  products:Product[] = [];



  constructor(
    private productService: ProductService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router

  ) { }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.getProducts();
  }


  async getProducts(){
    try {
      await this.showLoading()
      const userString = localStorage.getItem('user');

      if (!userString) {
        return;
      }

      const user: User = JSON.parse(userString);
      const orgName:string = user.orgName!;
      this.products = await this.productService.getProducts(orgName);

      //if no products, add a default product
      if(this.products.length === 0){
        const new_product:Product = {
          productObjective: 'No products found',
        }
        this.products.push(new_product);
      }


      await this.hideLoading()
    }catch (e) {
      console.log(e);
    }
  }

  async viewProduct(product: Product) {
    //navigate to the product page
    await this.router.navigate(['/view-product'],{queryParams:{product:JSON.stringify(product)}});
  }


  /**
   * Show an alert with the given message.
   *
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string) {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed!',
      message:message,
      buttons: ['OK']
    });
    await alert.present();
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

  async doRefresh(event: any) {
    await this.getProducts();
    event.target.complete();
  }


}
