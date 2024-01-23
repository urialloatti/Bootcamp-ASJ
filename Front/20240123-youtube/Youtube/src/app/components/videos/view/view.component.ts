import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../../services/video.service';
import { VideoInterface } from '../../../interfaces/video.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
  constructor(private rute: ActivatedRoute, private video: VideoService) {}

  currentVideo!: VideoInterface;
  isVideoLoaded: boolean = false;
  currentValue = -1;
  starArray: StarInterface[] = [
    { value: 1, star: 'empty' },
    { value: 2, star: 'empty' },
    { value: 3, star: 'empty' },
    { value: 4, star: 'empty' },
    { value: 5, star: 'empty' },
  ];
  hasLiked = false;

  ngOnInit(): void {
    this.rute.paramMap.subscribe((response) => {
      let id = Number(response.get('id'));
      if (id && !isNaN(id)) {
        this.video.getById(Number(id)).subscribe((videoResponse) => {
          this.currentVideo = videoResponse;
          console.log(this.currentVideo);
          this.isVideoLoaded = true;
          this.video.sendView(id).subscribe();
          this.calculateStars();
        });
      }
    });
  }

  likeVideo(like: boolean) {
    this.video.sendLike(this.currentVideo.id!, like).subscribe((response) => {
      this.currentVideo.dislikes = response.dislikes;
      this.currentVideo.likes = response.likes;
      this.hasLiked = true;
    });
  }

  sendCalification(value: number) {
    this.video
      .sendRaiting(this.currentVideo.id!, value)
      .subscribe((response) => {
        this.currentVideo.ranking = response.ranking;
        this.calculateStars();
      });
  }

  calculateStars() {
    for (let i = 0; i < 5; i++) {
      if (this.currentVideo.ranking - i > 0) {
        this.starArray[i].star = 'full';
        if (this.currentVideo.ranking - i < 1) {
          this.starArray[i].star = 'middle';
        }
      } else {
        this.starArray[i].star = 'empty';
      }
    }
  }
}

interface StarInterface {
  value: number;
  star: star;
}
type star = 'full' | 'middle' | 'empty';
