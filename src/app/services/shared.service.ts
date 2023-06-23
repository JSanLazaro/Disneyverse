import { EventEmitter, Injectable, Output } from '@angular/core';
import { Favorites } from '../shared/Favorites';
import { Character } from '../model/Character.model';
import { characters } from '../shared/mock-characters';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() changeOpen: EventEmitter<boolean> = new EventEmitter();
  @Output() changeRefresh: EventEmitter<boolean> = new EventEmitter();
  public favoritesObject: Favorites = new Favorites();
  isOpen = false;
  isRefresh = false;
  constructor() {}
  getFavorites(): Favorites {
    return this.favoritesObject;
  }
  getFavoritesId(): number[] {
    return this.favoritesObject.getFavoritesId();
  }
  getCharacters(): Character[] {
    return characters;
  }
  getFavoriteCharacters(): Character[] {
    let favoriteCharacters: Character[] = [];

    this.favoritesObject.favoritesId.forEach((characterId) => {
      let character = characters.find((record) => record._id == characterId);
      favoriteCharacters.push(character!);
    });
    
    return favoriteCharacters;
  }
  refreshSidebar(){
    this.changeRefresh.emit(this.isRefresh);
  }
  toggleOpen(){
    this.isOpen = !this.isOpen;
    this.isRefresh= !this.isRefresh;
    this.changeOpen.emit(this.isOpen);
    this.changeRefresh.emit(this.isRefresh);
  }
}
