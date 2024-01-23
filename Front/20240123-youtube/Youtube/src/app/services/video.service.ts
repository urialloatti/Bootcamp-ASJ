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
}
