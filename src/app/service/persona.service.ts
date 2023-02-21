import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL+`ver/${id}`)
  }

  public updatePersona(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL+`ver/${id}`, persona);
  }
}
