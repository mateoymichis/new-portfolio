import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public listEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.URL + `/list`);
  }

  public getEducation(id: number): Observable<Education> {
    return this.http.get<Education>(this.URL + `/get/${id}`);
  }

  public saveEducation(education: Education): Observable<any>{
    return this.http.post<any>(this.URL+'/create', education);
  }
  public updateEducation(id: number, education: Education): Observable<any> {
    return this.http.put<any>(this.URL+`/update/${id}`, education);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+`/delete/${id}`);
  }

}
