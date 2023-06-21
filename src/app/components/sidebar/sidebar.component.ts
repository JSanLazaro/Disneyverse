import {
  transition,
  state,
  style,
  trigger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

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
    ])
  ]
})
export class SidebarComponent {
  showSidebar = true;
  isOpen = true;
  onTargetContentClick(targetString: string, event: Event) {
    console.log(targetString);
  }
  toggleOpen(){
    this.isOpen=!this.isOpen;
    this.showSidebar= !this.showSidebar;
    console.log("toggle pressed");
  }
}
