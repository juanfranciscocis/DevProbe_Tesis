import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  @Input() productObjective:string = '';
  @Input() productStep:string = '';
  @Input() productService:string = '';
  @Input() productSLO:string = '';

  new_product:Product = {
    productObjective: '',
    productSteps: [],
    productServices: [],
    productSLOs: []
  }





  constructor() { }

  ngOnInit() {
  }

  async addProductStep() {
    this.new_product.productSteps.push(this.productStep);
    this.productStep = '';
  }

  async addProductService() {
    this.new_product.productServices.push(this.productService);
    this.productService = '';
  }

  async addProductSLO() {
    this.new_product.productSLOs.push(this.productSLO);
    this.productSLO = '';
  }





}
