import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL = ''; //Completar con URL del backend

  constructor(private http: HttpClient) { }

  public listProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.URL + `/list`);
  }

  public getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.URL + `/get/${id}`);
  }

  public saveProject(project: Project): Observable<any>{
    return this.http.post<any>(this.URL+'/create', project);
  }
  public updateProject(id: number, project: Project): Observable<any> {
    return this.http.put<any>(this.URL+`/update/${id}`, project);
  }

  public deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+`/delete/${id}`);
  }
}
