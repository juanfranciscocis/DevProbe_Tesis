import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute} from "@angular/router";
import {IonInput, IonList} from "@ionic/angular";

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

  @ViewChildren(IonInput) inputs: QueryList<IonInput> | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.getProductFromParams();
  }




  getProductFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
    });
    console.log(this.product);

  }


  getAllInputValues() {
    const inputValues = this.inputs!.map(input => input.value);

    //dividing the input values into productSteps, productServices, and productSLOs
    const itemsPerSection = this.product!.productSteps!.length;

    const productSteps = inputValues.slice(0, itemsPerSection);
    const productServices = inputValues.slice(itemsPerSection, itemsPerSection * 2);
    const productSLOs = inputValues.slice(itemsPerSection * 2, itemsPerSection * 3);

    console.log(productSteps);
    console.log(productServices);
    console.log(productSLOs);

  }





}
