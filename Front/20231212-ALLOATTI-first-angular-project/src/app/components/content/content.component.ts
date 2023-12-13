import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  num: number = 0;

  incrementBy(n: number) {
    this.num += n;
  }

  random() {
    this.num = Math.floor(Math.random() * 11);
  }


}
