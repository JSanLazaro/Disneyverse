import { Component } from '@angular/core';
import { Character } from '../../../model/Character.model';
import { characters } from 'src/app/shared/mock-characters';
import { SharedService } from 'src/app/services/shared.service';
import { Favorites } from 'src/app/shared/Favorites';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss'],
})
export class FavListComponent {
  
  characters: Character[] = characters;
  favoriteCharacters: Character[] = [];
  favoritesId: number[] = [];
  sharedFavorites:Favorites = this.sharedService.getFavorites();
  constructor(private sharedService:SharedService) {
    // this.favoritesId = [7, 32];
    // this.favoriteCharacters.push(this.getCharacterById(7)!);
    // this.favoriteCharacters.push(this.getCharacterById(33)!);
    console.log("FavLIstComponent constructor")
    this.refreshFavoriteCharactersFromShared();
  }
  
  getCharacterById(characterId: number) {
    let character = this.characters.find((record) => record._id == characterId);
    return character;
  }

  resetFavoriteCharacters(){
    this.favoriteCharacters = [];
  }
  refreshFavoriteCharactersFromShared(){
    console.log("fav-list component refreshFavoriteCharactersFromShared");
    this.resetFavoriteCharacters();
    this.sharedFavorites.favoritesId.forEach((id)=>{
      this.favoriteCharacters.push(this.getCharacterById(id)!);
    })
  }
}
