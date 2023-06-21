import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './shared/main/main.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { ListComponent } from './components/characters/list/list.component';
import { ModelComponent } from './model/model.component';
import { HeartComponent } from './components/heart/heart/heart.component';
import { FavListComponent } from './components/characters/fav-list/fav-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ModelComponent,
    HeartComponent,
    FavListComponent,
    ListComponent,
    MaincardComponent,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
