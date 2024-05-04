import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntityService<T extends { id: number }> {
 
  protected apiUrl: string;
  protected entityName: string;

  constructor(protected http: HttpClient, @Inject('endpoint') protected endpoint: string) {
    this.apiUrl = `${environment.apiUrl}/${endpoint}`;
    this.entityName = endpoint
  }

  getAllEntities(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}`);
  }

  getEntityById(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${id}`);
  }
// 
  addEntity(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}`, entity);
  }

  updateEntity(entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${entity.id}`, entity);
  }

  deleteEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
