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
<<<<<<< HEAD
=======
import { HeartComponent } from './heart/heart.component';
import { FavoriteratingComponent } from './components/favoriterating/favoriterating.component';
>>>>>>> 3bd2fff1d5b3a5ad749f47275b9b71d79d5e8418

import { HeartComponent } from './heart/heart.component';
import { FavListComponent } from './components/characters/fav-list/fav-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircleCharacterComponent } from './components/characters/circle-character/circle-character.component';
import { FavCardComponent } from './components/fav-card/fav-card.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ModelComponent,
    HeartComponent,
<<<<<<< HEAD
    FavListComponent,
    ListComponent,
    MaincardComponent,
    SidebarComponent,
    CircleCharacterComponent,
    FavCardComponent
    
=======
    FavoriteratingComponent
>>>>>>> 3bd2fff1d5b3a5ad749f47275b9b71d79d5e8418
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
