import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { SimpsonsProjectComponent } from './components/simpsons/simpsons-project/simpsons-project.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { RickMortyTableComponent } from './components/rick-and-morty/rick-morty-table/rick-morty-table.component';
import { RickMortyCharacterComponent } from './components/rick-and-morty/rick-morty-character/rick-morty-character.component';


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
        path: "**",
        redirectTo: "",
        pathMatch: "full"        
      }
    ]
  },
  {
    path: "home",
    component: AboutUsComponent
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
