import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoInterface } from '../interfaces/ToDoInterface';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  private URL_API: string = 'http://localhost:8080/to-do';

  public getAll(): Observable<ToDoInterface[]> {
    return this.http.get<ToDoInterface[]>(this.URL_API);
  }

  public getById(id: number): Observable<ToDoInterface> {
    return this.http.get<ToDoInterface>(this.URL_API + '/' + id);
  }

  public postToDo(value: String): Observable<ToDoInterface> {
    const toDoItem: ToDoInterface = {
      date: this.datePipe.transform(new Date(), 'dd/MM/yyyy, hh:mm aa')!,
      deleted: false,
      done: false,
      toDoString: value,
    };

    return this.http.post<ToDoInterface>(this.URL_API, toDoItem);
  }

  public updateToDo(id: number, value: string): Observable<ToDoInterface> {
    return this.http.put<ToDoInterface>(this.URL_API + '/' + id, value);
  }

  public cancelById(id: number): Observable<ToDoInterface> {
    return this.http.delete<ToDoInterface>(this.URL_API + '/' + id);
  }

  toggleDone(id: number): Observable<ToDoInterface> {
    return this.http.get<ToDoInterface>(this.URL_API + '/toggle-done/' + id);
  }
}
