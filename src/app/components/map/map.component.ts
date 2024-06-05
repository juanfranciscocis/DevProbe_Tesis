import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit,OnDestroy {

  map: Leaflet.Map|undefined;

  constructor() { }

  ngOnInit() { }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map!.remove();
  }
}
