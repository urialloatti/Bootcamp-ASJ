import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  
  toDoThing: string = "";
  toDoList: ToDo[] = [];
  toDoListFiltered: ToDo[] = [];

  addToDo() {
    console.log(this.toDoThing)
    let toDo = new ToDo(this.toDoThing);
    this.toDoList.unshift(toDo);
    this.toDoThing = "";
    this.toDoListFiltered = this.toDoList.filter((item) => item.isDeleted == false);
  }

  removeItem(index: number) {
    this.toDoListFiltered[index].toggleDelete();
    this.toDoListFiltered.splice(index, 1);
    
  }

  filterAll() {
    this.toDoListFiltered = this.toDoList.filter((item) => !item.isDeleted);
  }
  filterPending() {
    this.toDoListFiltered = this.toDoList.filter((item) => (!item.isDone && !item.isDeleted));
  }
  filterDone() {
    this.toDoListFiltered = this.toDoList.filter((item) => item.isDone);
  }
  filterDeleted() {
    this.toDoListFiltered = this.toDoList.filter((item) => item.isDeleted);
  }

}

class ToDo {

  constructor(value: string) {
    this.value = value;
    this.isDone = false;
    this.isDeleted = false
    this.date = new Date();
  }
  value: string;
  isDone: boolean;
  isDeleted: boolean;
  date: Date;

  toggleDone() {
    (this.isDone)? this.isDone = false: this.isDone = true;
  }
  toggleDelete() {
    (this.isDeleted)? this.isDeleted = false: this.isDeleted = true;
  }
}