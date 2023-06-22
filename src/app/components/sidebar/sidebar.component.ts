import {
  transition,
  state,
  style,
  trigger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { characters } from 'src/app/shared/mock-characters';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(-80%)' })),
      transition('open => close', [animate('300ms ease-in')]),
      transition('close => open', [animate('300ms ease-out')]),
    ]),
  ],
})
export class SidebarComponent {
  characters: Character[];
  showSidebar = true;
  isOpen = true;
  constructor(private sharedService: SharedService) {
    this.characters = sharedService.getFavoriteCharacters();
  }

  onTargetContentClick(targetString: string, event: Event) {
    console.log(targetString);
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.showSidebar = !this.showSidebar;
    console.log('toggle pressed');
    this.refreshFavoriteCharactersFromShared();
  }

  resetFavoriteCharacters() {
    this.characters = [];
  }
  refreshFavoriteCharactersFromShared() {
    this.characters = this.sharedService.getFavoriteCharacters();
  }
}
