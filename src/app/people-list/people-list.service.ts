import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class PeopleListService {

  constructor(private http: HttpClient) { }

  find(): Observable<Object>{
    const api = 'http://api.open-notify.org/astros.json';
    return this.http.get(api);
  }
}
