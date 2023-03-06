import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public listExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.URL + `/list`);
  }

  public getExperience(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.URL + `/get/${id}`);
  }

  public saveExperience(experience: Experience): Observable<any>{
    return this.http.post<any>(this.URL+'/create', experience);
  }
  public updateExperience(id: number, experience: Experience): Observable<any> {
    return this.http.put<any>(this.URL+`/update/${id}`, experience);
  }

  public deleteExperience(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+`/delete/${id}`);
  }
}
