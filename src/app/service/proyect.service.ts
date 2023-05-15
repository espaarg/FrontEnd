import { Injectable } from '@angular/core';
import { Proyect } from '../model/proyect';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  URL = environment.URL + 'proyecto/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyect[]>{
    return this.httpClient.get<Proyect[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyect>{
    return this.httpClient.get<Proyect>(this.URL + `detail/${id}`);
  }

  public save(proyecto: Proyect): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyect): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
