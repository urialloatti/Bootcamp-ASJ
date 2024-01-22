import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDoInterface } from '../../interfaces/ToDoInterface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent implements OnInit {
  constructor(private toDoService: ToDoService) {}

  toDoThing: string = '';
  toDoList: ToDoInterface[] = [];
  toDoListFiltered: ToDoInterface[] = [];

  ngOnInit(): void {
    this.loadList();
  }

  addToDo() {
    this.toDoService.postToDo(this.toDoThing).subscribe((response) => {
      console.log(response);
      this.toDoThing = '';
      this.loadList();
    });
  }

  toggleCancelItem(index: number) {
    this.toDoService.cancelById(index).subscribe(() => this.loadList());
  }

  toggleDoneItem(index: number) {
    this.toDoService.toggleDone(index).subscribe(() => this.loadList());
  }

  updateToDo(id: number) {
    let toDo = this.toDoList.find((item) => item.id == id);
    let newName = prompt(`Insert the new value: ${toDo?.toDoString}`);
    if (newName !== null) {
      this.toDoService.updateToDo(id, newName).subscribe(() => this.loadList());
    }
  }

  filterAll() {
    this.toDoListFiltered = this.toDoList.filter((item) => !item.deleted);
  }
  filterPending() {
    this.toDoListFiltered = this.toDoList.filter(
      (item) => !item.done && !item.deleted
    );
  }
  filterDone() {
    this.toDoListFiltered = this.toDoList.filter((item) => item.done);
  }
  filterDeleted() {
    this.toDoListFiltered = this.toDoList.filter((item) => item.deleted);
  }

  private loadList() {
    this.toDoService.getAll().subscribe((response) => {
      this.toDoList = response;
      console.log(this.toDoList);

      this.filterAll();
    });
  }
}
