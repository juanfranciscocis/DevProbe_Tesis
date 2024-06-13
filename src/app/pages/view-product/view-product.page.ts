import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController, IonInput, IonList, LoadingController} from "@ionic/angular";
import {ProductService} from "../../services/product.service";
import {RipeService} from "../../services/ripe.service";
import {Ripe} from "../../interfaces/ripe";

/**
 * ViewProductPage is a component that manages the view product page of the application.
 * It provides methods for getting and updating product details, adding and deleting product steps, and showing alerts and loading spinners.
 * It uses ProductService for product management, AlertController for alerts, LoadingController for loading spinners, and Router for navigation.
 *
 * @Component is a decorator that marks a class as an Angular component, providing additional metadata that determines how the component should be processed, instantiated and used at runtime.
 */
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  /**
   * Product object.
   */
  product: Product = {
    productObjective: '',
    productSteps: [],
    productServices: [],
    productSLOs: []
  }

  /**
   * The name of the organization.
   */
  orgName: string = 'orgName';

  /**
   * A QueryList of all IonInput elements in the component.
   */
  @ViewChildren(IonInput) inputs: QueryList<IonInput> | undefined;

  /**
   * ViewProductPage constructor.
   * It initializes ActivatedRoute, ProductService, AlertController, LoadingController, and Router instances.
   *
   * @param route - An instance of ActivatedRoute.
   * @param productService - An instance of ProductService.
   * @param alertCtrl - An instance of AlertController.
   * @param loadingCtrl - An instance of LoadingController.
   * @param router - An instance of Router.
   */
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private ripeService:RipeService
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * It gets the product from URL parameters and the organization name from local storage.
   */
  async ngOnInit() {
    this.getProductFromParams();
    this.getOrgName();
  }


  /**
   * This method gets the organization name from local storage.
   */
  getOrgName() {
    // Get orgName from local storage
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user = JSON.parse(userString);
    this.orgName = user.orgName!;
  }

  /**
   * This method gets the product from URL parameters.
   */
  getProductFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
    });
    console.log(this.product);

  }

  /**
   * This method updates the product fields with the input values and updates the product in the database.
   */
  async upDateFields() {
    await this.showLoading();
    const inputValues = this.inputs!.map(input => input.value);

    //dividing the input values into productSteps, productServices, and productSLOs
    const itemsPerSection = this.product!.productSteps!.length;

    const productSteps = inputValues.slice(0, itemsPerSection);
    const productServices = inputValues.slice(itemsPerSection, itemsPerSection * 2);
    const productSLOs = inputValues.slice(itemsPerSection * 2, itemsPerSection * 3);

    this.product!.productSteps! = productSteps as string[];
    this.product!.productServices! = productServices as string[];
    this.product.productSLOs = productSLOs as string[];



    //update product
    await this.productService.addProduct(this.product, this.orgName);
    await this.hideLoading();
    await this.showAlert('Product updated successfully');


  }

  /**
   * This method deletes the product from the database and navigates to the model-product page.
   */
  async deleteProduct() {
    //delete product
    await this.showLoading();
    await this.productService.removeProduct(this.orgName, this.product.productObjective!)
    await this.hideLoading();
    await this.showAlert('Product deleted successfully');
    //navigate to the model-product page
    await this.router.navigate(['/model-product']);

  }

  /**
   * This method deletes a step from the product and updates the product in the database.
   *
   * @param step - The step to be deleted.
   */
  async deleteStep(step: string) {
    await this.showLoading();
    //delete step
    const index = this.product.productSteps!.indexOf(step);
    this.product.productSteps!.splice(index, 1);
    this.product.productServices!.splice(index, 1);
    this.product.productSLOs!.splice(index, 1);


    await this.productService.addProduct(this.product, this.orgName);


    //Delete the latency history of the step
    let ripeDataID:string[] =[]
    this.ripeService.getHistoryResults(this.orgName, this.product.productObjective!).then((data:Ripe[])=>{
      console.log(step)
      for (let i = 0; i < data.length; i++) {
        ripeDataID.push(data[i].id)
      }
      for (let i = 0; i < ripeDataID.length; i++) {

        // Data looks like this: Web-otra cosa-12-6-2024-14:24:4, so we need to split it
        let dataSplit = ripeDataID[i].split('-')
        let stepID = dataSplit[1]

        if (stepID == step) {
          console.log('Deleting step: ' + stepID)
          this.ripeService.deleteHistory(this.orgName, this.product.productObjective!, ripeDataID[i])
        }
      }
    });


    await this.hideLoading();
    await this.showAlert('Product step deleted successfully');

  }


  /**
   * Show an alert with fields to add a new step.
   *
   */
  async addStep() {
    const alert = await this.alertCtrl.create({
      header: 'Add Step',
      inputs: [
        {
          name: 'step',
          type: 'text',
          placeholder: 'Step'
        },
        {
          name:'service',
          type:'text',
          placeholder:'Service'
        },
        {
          name:'slo',
          type:'text',
          placeholder:'SLO'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: async data => {
            await this.showLoading();
            this.product.productSteps!.push(data.step);
            this.product.productServices!.push(data.service);
            this.product.productSLOs!.push(data.slo);


            await this.productService.addProduct(this.product, this.orgName);
            await this.hideLoading();
            await this.showAlert('Product step added successfully');

          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * Show an alert with the given message.
   *
   * @param {string} message - The message to show in the alert.
   */
  async showAlert(message:string) {
    const alert = await this.alertCtrl.create({
      header: 'Product Update',
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
