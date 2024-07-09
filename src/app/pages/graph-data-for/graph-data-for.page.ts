import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-graph-data-for',
  templateUrl: './graph-data-for.page.html',
  styleUrls: ['./graph-data-for.page.scss'],
})
export class GraphDataForPage implements OnInit {
  productObjective: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // get parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.productObjective = params['product'];
    });
  }

  goToLatencyGraph() {
    this.router.navigate(['/graph-latency'], {queryParams: {product: this.productObjective}});

  }

  goToTraceGraph() {
    this.router.navigate(['/graph-trace'], {queryParams: {product: this.productObjective}});

  }
}
