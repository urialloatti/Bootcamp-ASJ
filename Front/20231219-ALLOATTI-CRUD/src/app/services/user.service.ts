import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUserInterface } from '../Interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  URL_API: string = "https://reqres.in/api/users"

  public getList(): Observable<any> {
    return this.http.get(this.URL_API);
  };

  public postUser(user: NewUserInterface): Observable<any> {
    return this.http.post(this.URL_API, user);
  };

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL_API + "/" + id);
  }

  public updateUser(user: NewUserInterface): Observable<any> {
    return this.http.put(this.URL_API + "/" + user.id, user)
  }

  public getUser(id: number): Observable<any> {
    return this.http.get(this.URL_API + "/" + id);
  }
}