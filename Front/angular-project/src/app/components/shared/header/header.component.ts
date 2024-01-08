import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOptions: LinkName[] = [
    {
      name: "Home",
      path: "home"
    },
    {
      name: "Projects",
      path: "projects"
    }
  ]
}

type LinkName = {
  name: string,
  path: string
}