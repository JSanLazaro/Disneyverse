import { Injectable } from '@angular/core';
import { Favorites } from '../shared/Favorites';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public favorites:Favorites = new Favorites();
  constructor() { }
  getFavorites(){
    return this.favorites;
  }
}
