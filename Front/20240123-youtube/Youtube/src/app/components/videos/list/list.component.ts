import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { VideoInterface } from '../../../interfaces/video.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private videos: VideoService) {}

  videosList: VideoInterface[] = [];
  isListLoaded: boolean = false;

  tableSections: string[] = [
    'id',
    'Título',
    'Categoría',
    'Likes/Dislikes',
    'Calificación',
  ];

  ngOnInit(): void {
    this.videos.getAll().subscribe((list) => {
      this.videosList = list;
      console.log(list);

      this.isListLoaded = true;
    });
  }

  public deleteVideoById(id: number, title: string) {
    if (confirm('Está seguro de eliminar el video ' + title)) {
      this.videos.deleteById(id).subscribe((video) => {
        prompt(video.title + ' eliminado correctamente.');
      });
    }
  }
}
