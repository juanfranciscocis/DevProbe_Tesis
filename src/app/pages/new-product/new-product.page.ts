import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {User} from "../../interfaces/user";
import {ProductService} from "../../services/product.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  @Input() productObjective:string = '';
  @Input() productStep:string = '';
  @Input() productServices:string = '';
  @Input() productSLO:string = '';

  new_product:Product = {
    productObjective: '',
    productSteps: [],
    productServices: [],
    productSLOs: []
  }





  constructor(
    private productService: ProductService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async addProductStep() {
    this.new_product!.productSteps!.push(this.productStep);
    this.productStep = '';
  }

  async addProductService() {
    this.new_product!.productServices!.push(this.productServices);
    this.productServices = '';
  }

  async addProductSLO() {
    this.new_product!.productSLOs!.push(this.productSLO);
    this.productSLO = '';
  }

  async createProduct() {
    await this.showLoading();
    this.new_product.productObjective =  this.productObjective;

    if (!this.new_product.productObjective) {
      await this.hideLoading();
      await this.showAlert('Please enter a product objective');
      return;
    }

    //Check if at least one step, service, and SLO has been added
    if (this.new_product.productSteps!.length < 1 || this.new_product.productServices!.length < 1 || this.new_product.productSLOs!.length < 1) {
      await this.hideLoading();
      await this.showAlert('Please add at least one step, service, and SLO');
      return;
    }

    const userString = localStorage.getItem('user');

    if (!userString) {
      return;
    }

    const user: User = JSON.parse(userString);
    const orgName = user.orgName;

    const result = await this.productService.addProduct(this.new_product, orgName!);
    if (result) {
      await this.hideLoading();
      await this.showAlert('Product created successfully', 'Product Created');
      // Go back to the model-product page using router
     await this.router.navigate(['/model-product']);
    } else {
      await this.hideLoading();
      await this.showAlert('There was an error creating the product');
    }

    // Clear the form
    this.new_product = {
      productObjective: '',
      productSteps: [],
      productServices: [],
      productSLOs: []
    }




  }


  /**
   * Show an alert with the given message.
   *
   * @param {string} header - The header of the alert. Defaults to 'Registration Failed!'.
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string,header?:string) {
    const alert = await this.alertCtrl.create({
      header: header || 'Registration Failed!',
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




}
