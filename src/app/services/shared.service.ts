import { Injectable } from '@angular/core';
import { Favorites } from '../shared/Favorites';
import { Character } from '../model/Character.model';
import { characters } from '../shared/mock-characters';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public favoritesObject: Favorites = new Favorites();
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
}
