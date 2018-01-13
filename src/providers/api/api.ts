import { CONFIG } from './../../app/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(CONFIG.api + '/events');
  }
}
