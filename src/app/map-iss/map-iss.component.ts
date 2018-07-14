import { Component, OnInit } from "@angular/core";
import { MapIssService } from "./map-iss.service";

import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: "app-map-iss",
  templateUrl: "./map-iss.component.html",
  styleUrls: ["./map-iss.component.css"],
  providers: [MapIssService]
})
export class MapIssComponent implements OnInit {
  lat: number;
  lng: number;
  display: boolean;
  alive: boolean;
  interval: number;

  triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757}
  ];

  constructor(private mapIssService: MapIssService) {
    this.display = false;
    this.alive = true;
    this.interval = 3000;
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
    .takeWhile(()=>this.alive)
    .subscribe(()=>{
      this.getPosition();
    })
  }

  getPosition() {
    this.mapIssService.getPosition().subscribe((position: Position) => {
      console.log(position);
      this.lat =  Number(position.iss_position.latitude);
      this.lng = Number(position.iss_position.longitude);
    });
  }
}

export interface Position {
  timestamp: number;
  iss_position: {
    latitude: number;
    longitude: number;
  };
  message: string;
}
