import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ListComponent } from './components/videos/list/list.component';
import { NewVideoComponent } from './components/videos/new-video/new-video.component';
import { ViewComponent } from './components/videos/view/view.component';
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ModalRedirectComponent } from './components/shared/modal-redirect/modal-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
    ViewComponent,
    NewVideoComponent,
    SafePipePipe,
    FilterPipePipe,
    ModalRedirectComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
