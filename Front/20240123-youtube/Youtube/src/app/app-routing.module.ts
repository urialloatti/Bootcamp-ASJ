import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/videos/list/list.component';
import { ViewComponent } from './components/videos/view/view.component';
import { NewVideoComponent } from './components/videos/new-video/new-video.component';

const routes: Routes = [
  {
    path: 'videos',
    component: ListComponent,
    // children: [
    //   { path: '', component: ListComponent },
    //   { path: 'new', component: NewVideoComponent },
    //   { path: ':id', component: ViewComponent },
    // ],
  },
  {
    path: 'videos/new',
    component: NewVideoComponent,
  },
  { path: 'videos/:id', component: ViewComponent },
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
