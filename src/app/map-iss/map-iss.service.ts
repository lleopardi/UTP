import { Injectable } from "@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { PositionISS } from "./models/position-iss";
import { PositionISSViewer } from "./models/position-iss-viewer";
import 'rxjs/add/operator/map';

@Injectable()
export class MapIssService {
  constructor(private http: HttpClient) {}

  getPosition(): Observable<PositionISSViewer> {
    const api = "http://api.open-notify.org/iss-now.json";
    return this.http.get(api)
    .map((position: PositionISS)=>{
      return new PositionISSViewer(position);
    });
  }
}
