import {Component, OnDestroy, OnInit} from '@angular/core';
//https://edupala.com/how-to-add-leaflet-map-in-ionic/
import * as Leaflet from 'leaflet';
// @ts-ignore
import { antPath } from 'leaflet-ant-path';
import {RipeService} from "../../services/ripe.service";
import {LatLngExpression} from "leaflet";
import {Ripe} from "../../interfaces/ripe";

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.page.html',
  styleUrls: ['./show-map.page.scss'],
})
export class ShowMapPage implements OnInit, OnDestroy{

  map: Leaflet.Map|undefined;
  ripeData:Ripe = {
    fromLatitude: 0,
    fromLongitude: 0,
    toLatitude: 0,
    toLongitude: 0,
    latency: 0
  }

  constructor(
  ) {

  }

  ngOnInit() {
  }
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([0, 0], 2.5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);


    antPath([[this.ripeData.fromLatitude, this.ripeData.fromLongitude], [this.ripeData.toLatitude, this.ripeData.toLongitude]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);

    //in the middle of the path add a Latency in ms thing
    const labelIcon = Leaflet.divIcon({
      className: 'label-icon',
      html: `<div style="background-color: black; padding: 2px; border-radius: 3px;">Latency: ${this.ripeData.latency} ms</div>`,
      iconSize: [120, 20] // size of the icon
    })

    // Add the label to the map at the desired coordinates
    const labelCoordinates:LatLngExpression = [(this.ripeData.fromLatitude! + this.ripeData.toLatitude!) / 2, (this.ripeData.fromLongitude! + this.ripeData.toLongitude!) / 2];
    Leaflet.marker(labelCoordinates, { icon: labelIcon }).addTo(this.map);

    setTimeout(() => {
        this.map!.invalidateSize();
    },100);

  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }
}
