import { Component, OnInit } from "@angular/core";
import { MapIssService } from "./map-iss.service";

import { TimerObservable } from "rxjs/observable/TimerObservable";
import "rxjs/add/operator/takeWhile";
import { PositionISSViewer } from "./models/position-iss-viewer";
import { LatLngLiteral } from "../../../node_modules/@agm/core/services/google-maps-types";

@Component({
  selector: "app-map-iss",
  templateUrl: "./map-iss.component.html",
  styleUrls: ["./map-iss.component.css"],
  providers: [MapIssService]
})
export class MapIssComponent implements OnInit {
  lat: number;
  lng: number;
  alive: boolean;
  interval: number;

  triangleCoords: Array<LatLngLiteral> = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 }
  ];

  constructor(private mapIssService: MapIssService) {
    this.alive = true;
    this.interval = 3000;
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.getPosition();
      });
  }

  getPosition() {
    this.mapIssService
      .getPosition()
      .subscribe((position: PositionISSViewer) => {
        this.lat = position.latitude;
        this.lng = position.longitude;
      });
  }
}
