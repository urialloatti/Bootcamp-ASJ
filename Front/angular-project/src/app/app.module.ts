import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { SimpsonsProjectComponent } from './components/simpsons/simpsons-project/simpsons-project.component';
import { SimpsonsTableComponent } from './components/simpsons/simpsons-table/simpsons-table.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { RickMortyTableComponent } from './components/rick-and-morty/rick-morty-table/rick-morty-table.component';
import { RickMortyCharacterComponent } from './components/rick-and-morty/rick-morty-character/rick-morty-character.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeNumbersFilterPipe } from './pipes/prime-numbers-filter.pipe';
import { PipePractiseComponent } from './pipe-practise/pipe-practise.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsMainComponent,
    RickMortyCharacterComponent,
    RickMortyTableComponent,
    SideBarComponent,
    SimpsonsProjectComponent,
    SimpsonsTableComponent,
    ToDoListComponent,
    HomeComponent,
    PrimeNumbersFilterPipe,
    PipePractiseComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
