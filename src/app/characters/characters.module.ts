import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListComponent } from '../components/characters/list/list.component';
import { MaincardComponent } from '../components/maincard/maincard.component';


@NgModule({
  declarations: [
    ListComponent,
    MaincardComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,    
  ]
})
export class CharactersModule { }
