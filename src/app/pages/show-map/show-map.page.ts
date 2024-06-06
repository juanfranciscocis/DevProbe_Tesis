import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Leaflet from "leaflet";
// @ts-ignore
import { antPath } from 'leaflet-ant-path';
import {MapData} from "../../interfaces/map-data";
import {LatLngExpression} from "leaflet";


//https://edupala.com/how-to-add-leaflet-map-in-ionic/

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.page.html',
  styleUrls: ['./show-map.page.scss'],
})
export class ShowMapPage implements OnInit, OnDestroy {

  map: Leaflet.Map|undefined;

  ripeData:MapData={
    fromLatitude: 50.1187,
    fromLongitude: 8.6842,
    toLatitude: 37.422,
    toLongitude: -122.084,
    latency: 1.4415543333
  }



  constructor() { }

  ngOnInit() { }


  ionViewDidEnter() { this.leafletMap(); }





  leafletMap() {
    this.map = Leaflet.map('mapId').setView([0, 0], 2.5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 2.5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);



    antPath([[this.ripeData.fromLatitude, this.ripeData.fromLongitude], [this.ripeData.toLatitude,this.ripeData.toLongitude]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);

    // Create a custom icon that will serve as our label
    const labelIcon = Leaflet.divIcon({
      className: 'label-icon',
      html: `<div style="background-color: black; padding: 2px; border-radius: 3px;">Latency: ${this.ripeData.latency} ms</div>`,
      iconSize: [150, 20] // size of the icon
    });

    // Add the label to the map at the desired coordinates
    const labelCoordinates:LatLngExpression = [(this.ripeData.fromLatitude + this.ripeData.toLatitude) / 2, (this.ripeData.fromLongitude + this.ripeData.toLongitude) / 2]; // adjust these coordinates to position your label
    Leaflet.marker(labelCoordinates, { icon: labelIcon }).addTo(this.map);



  }



  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }

}
