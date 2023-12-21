import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/categoryInterface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private URL_API: string = "https://api.escuelajs.co/api/v1/categories";
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.URL_API);
  }

  public getById(id: number): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(this.URL_API + "/" + id);
  }
}
