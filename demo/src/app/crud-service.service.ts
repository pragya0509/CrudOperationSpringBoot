import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './IUser';

const baseUrl =  'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser> {
    return this.http.get<IUser>(baseUrl+'user');
  }
  
  get(id): Observable<IUser|undefined> {
    return this.http.get<IUser|undefined>(`${baseUrl+'user'+'/id'}/${id}`);
  }
  update(id, data): Observable<IUser|undefined> {
    return this.http.put<IUser>(`${baseUrl+'user'}/${id}`, data);
  }
  
  delete(id):Observable<IUser> {
    return this.http.delete<IUser>(`${baseUrl+'user'}/${id}`);
  }
  
  deleteAll(): Observable<IUser> {
    return this.http.delete<IUser>(baseUrl+'user');
  }
  
  findByName(name): Observable<IUser|undefined> {
    return this.http.get<IUser>(`${baseUrl+'user'}/${name}`);
  }
  
  create(data): Observable<IUser|undefined> {
    return this.http.post<IUser>(baseUrl+'user', data);
  }
  
  
  

}
