import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { SimpsonsProjectComponent } from './components/simpsons-project/simpsons-project.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {
    path: "projects/to-do-list",
    component: ToDoListComponent
  },
  {
    path: "projects/simpsons-table",
    component: SimpsonsProjectComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "**",
    redirectTo: "projects/to-do-list"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
