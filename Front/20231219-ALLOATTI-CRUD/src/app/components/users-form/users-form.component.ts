import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { NewUserInterface } from '../../Interfaces/userInterface';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent implements OnInit{
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  
  newUser: NewUserInterface = {
    id: undefined,
    name: "",
    job: ""
  }
  
  ngOnInit(): void {
    const userId = this.route.snapshot.params["id"] || undefined;
    if (userId) {
      this.userService.getUser(userId).subscribe(
        (response) => {
          this.newUser.id = userId;
          this.newUser.name = response.data.first_name + " " + response.data.last_name;
          this.newUser.job = "Otro"
        }
      )
    } 
  }

  submitNewUser(form: NgForm): void {
    console.log(form.value)
    if (this.newUser.id) {
      console.log(`User ${form.value.name} updated.`)
      this.userService.updateUser(form.value).subscribe(
        (response) => {
          console.log(response);
          form.reset();
          this.newUser.id = undefined;
        });
    } else {
      console.log("New user created.")
      this.userService.postUser(form.value).subscribe(
        (respone) => {
          console.log(respone);
          form.reset();
        });
    }
  }
}
