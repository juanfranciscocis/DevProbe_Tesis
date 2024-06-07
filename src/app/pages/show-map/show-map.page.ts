import {Component, OnDestroy, OnInit} from '@angular/core';
//https://edupala.com/how-to-add-leaflet-map-in-ionic/
import * as Leaflet from 'leaflet';
// @ts-ignore
import { antPath } from 'leaflet-ant-path';
import {RipeService} from "../../services/ripe.service";

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.page.html',
  styleUrls: ['./show-map.page.scss'],
})
export class ShowMapPage implements OnInit, OnDestroy{

  map: Leaflet.Map|undefined;

  constructor(
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);


    antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);

    setTimeout(() => {
        this.map!.invalidateSize();
    },100);

  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }
}
