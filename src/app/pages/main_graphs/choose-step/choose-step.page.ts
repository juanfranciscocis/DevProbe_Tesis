import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../interfaces/user";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../interfaces/product";

@Component({
  selector: 'app-choose-step',
  templateUrl: './choose-step.page.html',
  styleUrls: ['./choose-step.page.scss'],
})
export class ChooseStepPage implements OnInit {

  productObjective: string = '';
  usage_type: string = '';
  products: Product[] = [];
  product: Product | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  async ionViewWillEnter() {
    // get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
      this.usage_type = params['usage_type'];
    });

    console.log(this.productObjective);
    console.log(this.usage_type);

    await this.getAllProducts();

    if(this.usage_type === 'software_testing'){
      for (let product of this.products) {
        if (product.productObjective === this.productObjective) {
          console.log(product);
          this.product = product;
        }
      }
    }

    if(this.usage_type === 'load_testing'){
      for (let product of this.products) {
        if (product.productObjective === this.productObjective) {
          console.log(product);
          this.product = product;
        }
      }
    }


  }

  ngOnInit() {
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
    this.products =  await this.productService.getProducts(orgName);
  }


  async navigateTo(product: any, step: any, usage_type: any) {
    if (usage_type === 'software_testing') {
      await this.router.navigate(['/software-testing-chooser', {
        productObjective: product.productObjective,
        step: step
      }]);
    }

    if (usage_type === 'load_testing') {
      await this.router.navigate(['/load-test', {
        productObjective: product.productObjective,
        step: step
      }]);
    }


  }
}
