import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";

@Injectable()
export class MapService {
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  isInsideTriangle(triangleCoords, lng, lat) {
    const triangle = turf.polygon([triangleCoords]);
    const currentPositionISS = turf.point([lng, lat]);
    if (turf.booleanPointInPolygon(currentPositionISS, triangle)) {
      alert("El ISS ingreso en el triangulo de las bermudas");
    }
  }
}
