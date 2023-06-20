import { Component } from '@angular/core';
import { Character} from '../../../model/Character.model';
import {characters} from 'src/app/shared/mock-characters';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  characters:Character[] = characters;
}
