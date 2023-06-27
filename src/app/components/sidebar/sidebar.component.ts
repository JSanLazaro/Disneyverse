import {
  transition,
  state,
  style,
  trigger,
  animate,
} from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { characters } from 'src/app/shared/mock-characters';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarTrigger', [
      transition(':enter', [

        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' })),      ]),
      state('open', style({ transform: 'translateX(0%)' })),
      state('close', style({ transform: 'translateX(-100%)' })),
      transition('open => close', [animate('300ms ease-in')]),
      transition('close => open', [animate('300ms ease-out')]),
    ]),
  ],
})
export class SidebarComponent {
  isOpen = false;  
  characters: Character[];
  // showSidebar = false;
  
  constructor(private sharedService: SharedService) {
    this.characters = sharedService.getFavoriteCharacters();
  }

  onTargetContentClick(targetString: string, event: Event) {
    console.log(targetString);
  }
  toggleOpen() {
    // this.isOpen = !this.isOpen;
    // this.showSidebar = !this.showSidebar;
    this.sharedService.closeSidebar();
    console.log('sidebar component toggle Open');
    this.refreshFavoriteCharactersFromShared();
  }

  resetFavoriteCharacters() {
    this.characters = [];
  }
  refreshFavoriteCharactersFromShared() {
    this.characters = this.sharedService.getFavoriteCharacters();
  }
  ngOnInit(){
    this.sharedService.changeOpen.subscribe(isOpen => {
      this.isOpen = isOpen!;
    })
    this.sharedService.changeRefresh.subscribe(() => {
      this.refreshFavoriteCharactersFromShared();
    })
  }
}
