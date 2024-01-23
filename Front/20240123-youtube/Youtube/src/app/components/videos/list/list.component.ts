import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import {
  CategoryInterface,
  VideoInterface,
} from '../../../interfaces/video.interface';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(
    private videos: VideoService,
    private categories: CategoriesService
  ) {}

  videosList: VideoInterface[] = [];
  categoriesList: CategoryInterface[] = [];
  currentCategoryId: number = -1;
  searchTerm: string = '';

  isListLoaded: boolean = false;

  tableSections: string[] = [
    'id',
    'Título',
    'Categoría',
    'Likes/Dislikes',
    'Calificación',
  ];

  ngOnInit(): void {
    this.loadAll();
    this.categories.getList().subscribe((list) => {
      this.categoriesList = list;
    });
  }

  public deleteVideoById(id: number, title: string) {
    if (confirm('Está seguro de eliminar el video ' + title)) {
      this.videos.deleteById(id).subscribe((video) => {
        alert(video.title + ' eliminado correctamente.');
        this.loadAll();
      });
    }
  }

  public filterByCategory() {
    this.isListLoaded = false;
    if (this.currentCategoryId != -1) {
      this.videos
        .getListByCategory(this.currentCategoryId)
        .subscribe((list) => {
          this.videosList = list;
          this.isListLoaded = true;
        });
    } else {
      this.loadAll();
    }
  }

  public loadAll() {
    this.videos.getAll().subscribe((list) => {
      this.videosList = list;
      this.isListLoaded = true;
    });
  }
}
