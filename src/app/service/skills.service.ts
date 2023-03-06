import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public listSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.URL + `/list`);
  }

  public getSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.URL + `/get/${id}`);
  }

  public saveSkill(skill: Skill): Observable<any>{
    return this.http.post<any>(this.URL+'/create', skill);
  }
  public updateSkill(id: number, skill: Skill): Observable<any> {
    return this.http.put<any>(this.URL+`/update/${id}`, skill);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+`/delete/${id}`);
  }
}
