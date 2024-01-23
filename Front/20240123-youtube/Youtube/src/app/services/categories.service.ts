import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  private URL_API = 'http://localhost:8080/app/categories';

  public getList(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.URL_API);
  }

  public addCategory(name: String): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>(this.URL_API, name);
  }
}
