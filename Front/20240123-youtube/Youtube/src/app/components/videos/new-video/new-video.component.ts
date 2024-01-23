import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriesService } from '../../../services/categories.service';
import { VideoService } from '../../../services/video.service';

import {
  CategoryInterface,
  NewVideoInterface,
} from '../../../interfaces/video.interface';
import { ModalRedirectInterface } from '../../../interfaces/modalInterfaces';

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
    category: -1,
    description: '',
  };

  isFormfieldInvalid: any = {
    url: false,
    title: false,
    categoryId: false,
    description: false,
  };

  isFormValid: boolean = true;

  categoriesList!: CategoryInterface[];
  isCategoriesLoaded: boolean = true;

  modalRedirectFlag: boolean = false;
  modalRedirectObject!: ModalRedirectInterface;

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
        alert('Hay errores en el formulario');
        this.isFormValid = false;
      }
    });
    if (this.isFormValid) {
      this.currentVideo.url = this.currentVideo.url.replace(
        /watch\?v=/,
        'embed/'
      );
      this.videos.addVideo(this.currentVideo).subscribe(() => {
        this.modalRedirectObject = {
          message: 'Video cargado con éxito.',
          path: '/videos',
        };
        this.modalRedirectFlag = true;
      });
    }
  }

  private validateForm() {
    this.isFormfieldInvalid.url = !this.validateURL(this.currentVideo.url);
    this.isFormfieldInvalid.title = this.currentVideo.title.length < 4;
    this.isFormfieldInvalid.categoryId = this.currentVideo.category == -1;
    this.isFormfieldInvalid.categoryId =
      this.currentVideo.description?.length! > 254;
  }
}
