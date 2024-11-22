import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FlameGraphService} from "../../../services/flame-graph.service";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-graph-data-for',
  templateUrl: './graph-data-for.page.html',
  styleUrls: ['./graph-data-for.page.scss'],
})
export class GraphDataForPage implements OnInit {

  orgName: string = '';

  metrics: string[] = ['Latency', 'Trace', 'CPU Usage', 'Memory Usage', 'Software Testing', 'Load Testing'];
  productObjective: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flameGraphService: FlameGraphService,
  ) { }

  ngOnInit() {
    // get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
    });

    try {
      const userString = localStorage.getItem('user');
      if (!userString) {
        return;
      }
      const user: User = JSON.parse(userString);
      this.orgName= user.orgName!;

  }catch (e) {
    console.log(e);
  }
  }

  goToLatencyGraph() {
    this.router.navigate(['/graph-latency'], {queryParams: {product: this.productObjective}});

  }

  goToTraceGraph() {
    this.router.navigate(['/graph-trace'], {queryParams: {product: this.productObjective}});

  }

  async goToGraph(metric: string) {
    if (metric === 'Latency') {
      this.router.navigate(['/graph-latency'], {queryParams: {product: this.productObjective}});
    }
    if (metric === 'Trace') {
      this.router.navigate(['/graph-trace'], {queryParams: {product: this.productObjective}});
    }
    if (metric == 'CPU Usage') {
      let products = await this.flameGraphService.getProducts(this.orgName);

      for (let product of products) {
        if (product.productObjective === this.productObjective) {
          await this.router.navigate(['/flame-graph-date'], {
            queryParams: {
              product: JSON.stringify(product),
              usage_type: 'cpu'
            }
          });
        }
      }
    }

    if (metric == 'Memory Usage') {
      let products = await this.flameGraphService.getProducts(this.orgName);

      for (let product of products) {
        if (product.productObjective === this.productObjective) {
          await this.router.navigate(['/flame-graph-date'], {
            queryParams: {
              product: JSON.stringify(product),
              usage_type: 'memory_usage'
            }
          });
        }
      }
    }

    if (metric == 'Software Testing') {
      await this.router.navigate(['/choose-step'], {
        queryParams: {
          product: this.productObjective,
          usage_type: 'software_testing'
        }
      });
    }

    if (metric == 'Load Testing') {
      await this.router.navigate(['/choose-step'], {
        queryParams: {
          product: this.productObjective,
          usage_type: 'load_testing'
        }
      });


    }
  }
}
