import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { NewUserInterface, UserInterface } from '../../Interfaces/userInterface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  constructor(private userService: UserService) { }

  users: UserInterface[] = [];

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.userService.getList().subscribe(
      (response) => {
        this.users = response.data;
        console.log(this.users);
      });
  }


  deleteUser(id: number): void {
    if (confirm("Do you want to delete the user with the id " + id)) {
      this.userService.deleteUser(id).subscribe(
        (response) => {
          console.log(response);
          this.loadList();
        }
      );
    }
  }

}
