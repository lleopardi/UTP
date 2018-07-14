import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class MapIssService {

  constructor(private http: HttpClient) { }

  getPosition(): Observable<Object>{
    const api = 'http://api.open-notify.org/iss-now.json';
    return this.http.get(api);
  }

}
