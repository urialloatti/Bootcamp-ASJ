import { Component, OnInit } from '@angular/core';
import {
  CategoryInterface,
  NewVideoInterface,
  VideoInterface,
} from '../../../interfaces/video.interface';
import { CategoriesService } from '../../../services/categories.service';
import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrl: './new-video.component.css',
})
export class NewVideoComponent implements OnInit {
  constructor(
    private category: CategoriesService,
    private videos: VideoService
  ) {}

  currentVideo: NewVideoInterface = {
    url: '',
    title: '',
    categoryId: -1,
    description: '',
  };

  isFormfieldInvalid: any = {
    url: false,
    title: false,
    categoryId: false,
  };

  isFormValid: boolean = true;

  categoriesList!: CategoryInterface[];
  isCategoriesLoaded: boolean = true;

  ngOnInit(): void {
    this.category.getList().subscribe((list) => {
      this.categoriesList = list;
      this.isCategoriesLoaded = true;
    });
  }

  public validateURL(url: string): boolean {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  }

  public submitForm() {
    this.isFormValid = true;
    this.validateForm();
    Object.keys(this.isFormfieldInvalid).forEach((key) => {
      if (this.isFormValid && this.isFormfieldInvalid[key]) {
        prompt('Hay errores en el formulario');
        this.isFormValid = false;
      }
    });
    if (this.isFormValid) {
      this.videos.addVideo(this.currentVideo).subscribe();
    }
  }

  private validateForm() {
    this.isFormfieldInvalid.url = this.validateURL(this.currentVideo.url);
    this.isFormfieldInvalid.title = this.currentVideo.title.length < 4;
    this.isFormfieldInvalid.categoryId = this.currentVideo.categoryId == -1;
  }
}
