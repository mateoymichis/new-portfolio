import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.URL+`ver/${id}`)
  }

  public updatePerson(id: number, persona: Person): Observable<any> {
    return this.http.put<any>(this.URL+`update/${id}`, persona);
  }
}
