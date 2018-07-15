import { Component, OnInit } from "@angular/core";
import { MapIssService } from "./map-iss.service";

import { TimerObservable } from "rxjs/observable/TimerObservable";
import "rxjs/add/operator/takeWhile";
import { PositionISSViewer } from "./models/position-iss-viewer";

import * as mapboxgl from "mapbox-gl";
import { MapService } from "./map.service";

@Component({
  selector: "app-map-iss",
  templateUrl: "./map-iss.component.html",
  styleUrls: ["./map-iss.component.css"],
  providers: [MapIssService, MapService]
})
export class MapIssComponent implements OnInit {
  private lat: number;
  private lng: number;
  private alive: boolean;
  private interval: number;

  private map: mapboxgl.Map;
  private marker;

  private triangleCoords = [
    [-80.19, 25.774],
    [-66.118, 18.466],
    [-64.757, 32.321],
    [-80.19, 25.774]
  ];

  constructor(
    private mapIssService: MapIssService,
    private mapService: MapService
  ) {
    this.alive = true;
    this.interval = 3000;
    this.marker = mapboxgl.Marker();
  }

  ngOnInit() {
    this.initializeMap();
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.getPositionISS();
      });
  }

  private getPositionISS() {
    this.mapIssService
      .getPosition()
      .subscribe((position: PositionISSViewer) => {
        this.lat = position.latitude;
        this.lng = position.longitude;
        this.setMarker();
        this.isInsideTriangle();
      });
  }

  private initializeMap() {
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 3
    });

    this.map.on("load", () => {
      this.renderBermudeTriangle();
    });
  }

  private renderBermudeTriangle() {
    this.map.addLayer({
      id: "bermude-triangle",
      type: "fill",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [this.triangleCoords]
          }
        }
      },
      layout: {},
      paint: {
        "fill-color": "#088",
        "fill-opacity": 0.8
      }
    });
  }

  private setMarker() {
    if (this.marker) {
      this.marker.remove();
    }
    this.marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);
    this.map.flyTo({ center: [this.lng, this.lat] });
  }

  private isInsideTriangle() {
    this.mapService.isInsideTriangle(this.triangleCoords, this.lng, this.lat);
  }
}
