import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons-project',
  templateUrl: './simpsons-project.component.html',
  styleUrl: './simpsons-project.component.css'
})
export class SimpsonsProjectComponent {
  charactersList: Character[] = []

  addCharacter(name: HTMLInputElement, profession: HTMLInputElement, url: HTMLInputElement): void {

    this.charactersList.push({name: name.value, profession: profession.value, url: url.value});
    name.value = "";
    profession.value = "";
    url.value = "";
  }
}

type Character = {
  name: string,
  profession: string,
  url: string
}