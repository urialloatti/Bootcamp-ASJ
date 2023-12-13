import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  projectsList: string[] = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6", ]
}
