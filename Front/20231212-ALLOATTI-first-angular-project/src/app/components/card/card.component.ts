import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  names = [{
    name: "Uriel",
    age: 25
}, {
  name: "Sofía",
  age: 22
}, {
  name: "Julieta",
  age: 27
}, {
  name: "Julio",
  age: 31
}, {
  name: "Alexis",
  age: 19
}]
}
