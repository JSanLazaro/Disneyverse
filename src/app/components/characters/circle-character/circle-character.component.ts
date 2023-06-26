import { Component,Input } from '@angular/core';
import { Character } from 'src/app/model/Character.model';

@Component({
  selector: 'app-circle-character',
  templateUrl: './circle-character.component.html',
  styleUrls: ['./circle-character.component.scss']
})
export class CircleCharacterComponent {
  @Input() character!:Character;
}
