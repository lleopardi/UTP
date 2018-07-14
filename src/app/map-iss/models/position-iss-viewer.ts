import { PositionISS } from "./position-iss";

export class PositionISSViewer {
  private lat: number;
  private lng: number;

  constructor(positionISS: PositionISS) {
    this.lat = Number(positionISS.iss_position.latitude);
    this.lng = Number(positionISS.iss_position.longitude);
  }

  get latitude(): number {
    return this.lat;
  }

  get longitude(): number {
    return this.lng;
  }
}
