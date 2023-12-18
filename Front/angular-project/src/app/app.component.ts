import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor (private route: Router) {}

  projectsPath(currentPath: string): boolean {
    return this.route.url.startsWith(currentPath);
  }

}
