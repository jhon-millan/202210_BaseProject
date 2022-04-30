import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './Cafe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(private http: HttpClient) { }

  getCafeList(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(environment.baseUrl)
  }
}
