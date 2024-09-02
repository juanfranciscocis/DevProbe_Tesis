import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {FlameGraphService} from "../../services/flame-graph.service";


@Component({
  selector: 'app-flame-graph-for',
  templateUrl: './flame-graph-for.page.html',
  styleUrls: ['./flame-graph-for.page.scss'],
})
export class FlameGraphForPage implements OnInit {

  products:Product[] = [];
  usage_type: string | null = '';

  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  async ionViewWillEnter() {
    await this.getProducts();
  }

  async getProducts(){
    try {
      const userString = localStorage.getItem('user');
      if (!userString) {
        return;
      }
      const user: User = JSON.parse(userString);
      const orgName:string = user.orgName!;


       this.usage_type = this.activatedRoute.snapshot.queryParamMap.get('usage_type');
       //if null set to default
      if(this.usage_type === null){
        this.usage_type = '';
      }
      console.log(this.usage_type);


      this.products = await this.flameGraphService.getProducts(orgName);

      //if no products, add a default product
      if(this.products.length === 0){
        const new_product:Product = {
          productObjective: 'No products found',
        }
        this.products.push(new_product);
      }



    }catch (e) {
      console.log(e);
    }
  }

  async viewDatesForProduct(product: Product) {
    await this.router.navigate(['/flame-graph-date'], {queryParams: {product: JSON.stringify(product), usage_type: this.usage_type}});
  }



  async doRefresh(event: any) {
    await this.getProducts();
    event.target.complete();
  }


  viewProduct(product: Product) {

  }

  ngOnInit(): void {

  }
}
