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

  ngOnInit(): void {
    this.rute.paramMap.subscribe((response) => {
      let id = Number(response.get('id'));
      if (id && !isNaN(id)) {
        this.video.getById(Number(id)).subscribe((videoResponse) => {
          this.currentVideo = videoResponse;
          console.log(this.currentVideo);

          this.isVideoLoaded = true;
        });
      }
    });
  }
}
