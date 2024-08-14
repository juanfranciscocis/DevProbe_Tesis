import { Component, OnInit } from '@angular/core';
import {FlameGraphService} from "../../services/flame-graph.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import {Product} from "../../interfaces/product";


@Component({
  selector: 'app-flame-graph-date',
  templateUrl: './flame-graph-date.page.html',
  styleUrls: ['./flame-graph-date.page.scss'],
})
export class FlameGraphDatePage implements OnInit {

  dates:string[] = [];
  product:Product = {}


  constructor(
    private flameGraphService: FlameGraphService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ionViewWillEnter() {
    this.getProductFromParams();
    await this.getDates();
  }

  /**
   * This method gets the product from URL parameters.
   */
  getProductFromParams() {
    // Get product from URL params
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
    });
    console.log(this.product.productObjective);

  }

  async getDates(){
    try {
      await this.showLoading()
      const userString = localStorage.getItem('user');

      if (!userString) {
        return;
      }

      const user: User = JSON.parse(userString);
      const orgName:string = user.orgName!;
      console.log(orgName);
      this.dates = await this.flameGraphService.getDates(orgName, this.product.productObjective!);
      console.log(this.dates);
      await this.hideLoading()

      if (this.dates.length === 0) {
        this.dates.push('No dates found');
      }


    }catch (e) {
      console.log(e);
    }
  }


  async viewUsageForDate(date: string) {
    await this.router.navigate(['/flame-graph'], {queryParams: {product: JSON.stringify(this.product), date: date}});
  }




  async doRefresh(event: any) {
    await this.getDates();
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

  ngOnInit(): void {
  }

}
