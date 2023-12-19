import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';

const routes: Routes = [
  {
    path: "users",
    component: UsersListComponent
  },
  {
    path: "user",
    children: [
      {path: "", component: UsersFormComponent},
      {path: ":id", component: UsersFormComponent}
    ]
  },
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
