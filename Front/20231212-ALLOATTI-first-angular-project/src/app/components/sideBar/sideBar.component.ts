import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent {
news = [
  {
    title: "Gaza conflict: Middle East tourism struggles for survival",
    imgSrc: "https://static.dw.com/image/63581902_602.jpg",
    abstract: "Tourism plays an important role in Egypt, Jordan and Lebanon. But visitor numbers are falling due to nearby conflict."
  },
  {
    title: "Germany starts trial of alleged Russian spy",
    imgSrc: "https://static.dw.com/image/67668453_603.jpg",
    abstract: "A former member of Germany's foreign intelligence service faces court on charges of spying for Russia."

  }
]

}
