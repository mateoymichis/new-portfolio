import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public getPerson(id: number): Observable<About> {
    return this.http.get<About>(this.URL+`ver/${id}`)
  }

  public updatePerson(id: number, sobre: About): Observable<any> {
    return this.http.put<any>(this.URL+`update/${id}`, sobre);
  }
}
