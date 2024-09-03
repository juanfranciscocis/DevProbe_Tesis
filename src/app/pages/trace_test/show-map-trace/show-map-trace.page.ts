import { Component, OnInit } from '@angular/core';
import {Traceroute, TracerouteResult} from "../../../classes/traceroute";
import * as Leaflet from 'leaflet';
// @ts-ignore
import { antPath } from 'leaflet-ant-path';
import {RipeService} from "../../../services/ripe.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {LatLngExpression} from "leaflet";
import {RipeTraceService} from "../../../services/ripe-trace.service";



@Component({
  selector: 'app-show-map-trace',
  templateUrl: './show-map-trace.page.html',
  styleUrls: ['./show-map-trace.page.scss'],
})
export class ShowMapTracePage implements OnInit {
  ripeData: Traceroute[] = [];
  map:Leaflet.Map|undefined;

  orgName: string = '';
  productObjective:string = '';
  description: string = '';

  constructor(
    private ripeTraceService: RipeTraceService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
  ) { }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }

  async ionViewDidEnter() {
    await this.showLoading()
    this.route.queryParams.subscribe(async params => {
      this.description = params['description'];
      this.productObjective = params['productObjective'];
      this.orgName = params['orgName'];
      console.log(this.orgName);
      console.log(this.productObjective);
      console.log(this.description);
      await this.ripeTraceService.getAllResultsByDescription(this.orgName, this.productObjective, this.description).then(r => {
        // @ts-ignore
        this.ripeData=r["data"]
        console.log(this.ripeData);
      }).then(() => {
        this.leafletMap();
      });
    });


  }

  async leafletMap() {
    this.map = Leaflet.map('mapId').setView([0, 0], 2.5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
      minZoom: 2.5,
      maxZoom:8
    }).addTo(this.map);


    setTimeout(() => {
      this.map!.invalidateSize();
      this.addPaths()
    }, 1000);
  }


  async addPaths() {

    let arrOfLatLong = []
    for (let data of this.ripeData){
      let latLong=[]
      let results:TracerouteResult[] = data.result!;
      for (let res of results){
        try {
          let hop = res.result![0];
          let latitude = hop.from_latitude!;
          let longitude = hop.from_longitude!;

          if (latitude == 0 && longitude == 0){
            continue;
          }

          if (latitude == undefined || longitude == undefined){
            continue;
          }

          latLong.push([latitude,longitude])
        }catch (e){
          continue;
        }
      }

      for (let data of this.ripeData){
        let dest_lat = data.dst_latitude;
        let dest_long = data.dst_longitude;
        let src_lat = data.src_latitude;
        let src_long = data.src_longitude;

        if (dest_lat == 0 && dest_long == 0){
          continue;
        }
        latLong.push([dest_lat, dest_long])

        if (src_lat == 0 && src_long == 0){
          continue;
        }
        // add src lat long to the beginning of the array
        latLong.unshift([src_lat, src_long])
      }

      arrOfLatLong.push(latLong)
    }


    console.log(arrOfLatLong)

    for (let data of arrOfLatLong){

      //generate a random color
      let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);


      antPath(data,
        {color:randomColor, weight: 5, opacity: 0.6})
        .addTo(this.map);
    }
    await this.hideLoading()
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
