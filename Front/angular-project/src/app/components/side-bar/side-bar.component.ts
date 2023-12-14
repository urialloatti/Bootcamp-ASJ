import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  projectsList: LinkName[] = [
    {
      name: "To do list",
      path: "projects/to-do-list"
    },
    {
      name: "Simpson's Table",
      path: "projects/simpsons-table"
    }
  ]
}

type LinkName = {
  name: string,
  path: string
}