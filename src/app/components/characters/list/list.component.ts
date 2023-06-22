import { Component, ViewChild } from '@angular/core';
import { Character} from '../../../model/Character.model';
import {characters} from 'src/app/shared/mock-characters';
import {MaincardturnComponent} from 'src/app/components/maincardturn/maincardturn.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  characters:Character[] = characters;




}
