import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {FlameGraphService} from "../../services/flame-graph.service";


@Component({
  selector: 'app-flame-graph-for',
  templateUrl: './flame-graph-for.page.html',
  styleUrls: ['./flame-graph-for.page.scss'],
})
export class FlameGraphForPage implements OnInit {

  products:Product[] = [];

  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

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
      this.products = await this.flameGraphService.getProducts(orgName);

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

  async viewDatesForProduct(product: Product) {
    await this.router.navigate(['/flame-graph-date'], {queryParams: {product: JSON.stringify(product)}});
  }



  async doRefresh(event: any) {
    await this.getProducts();
    event.target.complete();
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

  viewProduct(product: Product) {

  }

  ngOnInit(): void {
  }
}
