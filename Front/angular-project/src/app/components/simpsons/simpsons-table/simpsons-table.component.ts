import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simpsons-table',
  templateUrl: './simpsons-table.component.html',
  styleUrl: './simpsons-table.component.css'
})
export class SimpsonsTableComponent {

  @Input()
  charactersList: Character[] = [];



}

type Character = {
  name: string,
  profession: string,
  url: string
}