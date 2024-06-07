import {Component, OnDestroy, OnInit} from '@angular/core';
//https://edupala.com/how-to-add-leaflet-map-in-ionic/
import * as Leaflet from 'leaflet';
// @ts-ignore
import { antPath } from 'leaflet-ant-path';
import {RipeService} from "../../services/ripe.service";
import {LatLngExpression} from "leaflet";
import {Ripe} from "../../interfaces/ripe";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.page.html',
  styleUrls: ['./show-map.page.scss'],
})
export class ShowMapPage implements OnInit, OnDestroy{

  map: Leaflet.Map|undefined;
  ripeData: Ripe[]=[];

  constructor(
    private ripeService: RipeService,
    private loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {

  }


  async ionViewDidEnter() {
    await this.showLoading()
    this.ripeData= await this.ripeService.getAllResults("DevProbe", "Web", "NEW IONIC");
    await this.leafletMap();
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
      this.addPaths();
    }, 1000);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }

  async addPaths() {
    // @ts-ignore
    this.ripeData = this.ripeData["data"];
    //sort from highest to lowest latency
    this.ripeData.sort((a, b) => (a.latency! < b.latency!) ? 1 : -1);


    for (let data of this.ripeData) {
      antPath([[data.fromLatitude, data.fromLongitude], [data.toLatitude, data.toLongitude]],
        {color: '#FF0000', weight: 5, opacity: 0.6})
        .addTo(this.map);

      let labelIcon = Leaflet.divIcon({
        className: 'label-icon',
        html: `<div style="background-color: white; padding: 2px; border-radius: 3px; display: flex; justify-content: center; align-items: center; box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);"><p style="color:black">Latency: ${data.latency} ms</p></div>`,
        iconSize: [200, 20] // size of the icon
      })

      // Add the label to the map at the desired coordinates
      // @ts-ignore
      const labelCoordinates: LatLngExpression = [(data.fromLatitude + data.toLatitude) / 2, (data.fromLongitude + data.toLongitude) / 2];
      Leaflet.marker(labelCoordinates, {icon: labelIcon}).addTo(this.map!);


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


}
