import { Component, Input } from '@angular/core';
import { Character } from 'src/app/model/Character.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() character!:Character;
  showMessage(){
    alert('Element delete');
  }
}
