import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {User} from "../../interfaces/user";
import {Product} from "../../interfaces/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-latency-chooser',
  templateUrl: './latency-chooser.page.html',
  styleUrls: ['./latency-chooser.page.scss'],
})
export class LatencyChooserPage implements OnInit {

  products: Product[] = [];





  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllProducts();
  }


  async getAllProducts(){
    const userString = localStorage.getItem('user');
    if (!userString) {
      return;
    }
    const user: User = JSON.parse(userString);
    const orgName = user.orgName!;
    this.products = await this.productService.getProducts(orgName);
  }

  doRefresh($event: any) {
    this.getAllProducts().then(() => {
      $event.target.complete();
    });
  }

  async navigateToLatencyTest(product: Product, step: string) {
    await this.router.navigate(['/latency-test', {productObjective: product.productObjective, step: step}]);
  }
}
