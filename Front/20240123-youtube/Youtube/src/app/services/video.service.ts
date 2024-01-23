import { VideoInterface } from './../interfaces/video.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewVideoInterface } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  private URL_API: string = 'http://localhost:8080/app/videos';

  public addVideo(video: NewVideoInterface): Observable<VideoInterface> {
    return this.http.post<VideoInterface>(this.URL_API, video);
  }

  public getAll(): Observable<VideoInterface[]> {
    return this.http.get<VideoInterface[]>(this.URL_API);
  }

  public getById(id: number): Observable<VideoInterface> {
    return this.http.get<VideoInterface>(this.URL_API + '/' + id);
  }

  public deleteById(id: number): Observable<VideoInterface> {
    return this.http.delete<VideoInterface>(this.URL_API + '/' + id);
  }

  public sendLike(id: number, liked: boolean): Observable<VideoInterface> {
    const body = { liked: liked };
    return this.http.patch<VideoInterface>(this.URL_API + '/liked/' + id, body);
  }

  public sendRaiting(id: number, rating: number): Observable<VideoInterface> {
    const body = { qualification: rating };
    return this.http.patch<VideoInterface>(
      this.URL_API + '/ratings/' + id,
      body
    );
  }

  public sendView(id: number): Observable<VideoInterface> {
    return this.http.patch<VideoInterface>(
      this.URL_API + '/watched/' + id,
      null
    );
  }

  public getListByCategory(id: number): Observable<VideoInterface[]> {
    return this.http.get<VideoInterface[]>(this.URL_API + '/category/' + id);
  }
}
