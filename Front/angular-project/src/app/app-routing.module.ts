import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { RickMortyCharacterComponent } from './components/rick-and-morty/rick-morty-character/rick-morty-character.component';
import { RickMortyTableComponent } from './components/rick-and-morty/rick-morty-table/rick-morty-table.component';
import { SimpsonsProjectComponent } from './components/simpsons/simpsons-project/simpsons-project.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { PipePractiseComponent } from './pipe-practise/pipe-practise.component';


const routes: Routes = [
  {
    path: "projects",
    children: [
      {
        path: "",
        component: ProjectsMainComponent
      },
      {
        path: "to-do-list",
        component: ToDoListComponent
      },
      {
        path: "simpsons-table",
        component: SimpsonsProjectComponent
      },
      {
        path: "rick-and-morty",
        children: [
          { path: "", component: RickMortyTableComponent },
          { path: ":id", component: RickMortyCharacterComponent}
        ]
      },
      {
        path: "pipe-practise",
        component: PipePractiseComponent
      },
      {
        path: "**",
        redirectTo: "",
        pathMatch: "full"        
      }
    ]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
