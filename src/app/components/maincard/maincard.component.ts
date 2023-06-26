<<<<<<< HEAD
import { Component,ElementRef,Input,ViewChild } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';
import { Renderer2 } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
=======
import { HtmlParser } from '@angular/compiler';
import {
  Component,
  Input,
  ViewChild,
  OnInit,
  Renderer2,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { MaincardturnComponent } from 'src/app/components/maincardturn/maincardturn.component';
>>>>>>> 3bd2fff1d5b3a5ad749f47275b9b71d79d5e8418

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: [
    './maincard.component.scss',
    '../maincardturn/maincardturn.component.scss',
  ],
})
export class MaincardComponent {
<<<<<<< HEAD
  @Input() character!:Character;
  @ViewChild('card') cardDiv!: ElementRef;
  texto:string;
  isFront:boolean;
  constructor(private sharedService: SharedService,private renderer: Renderer2){
    this.texto = "";
    this.isFront = true;
  }
  

  addToFavorites(){
    console.log("added to favorites "+ this.character._id);
    this.sharedService.favoritesObject.addId(this.character._id);
    this.sharedService.toggleOpen();
  }
  removeFromFavoties(id:number){
    console.log("removed to favorites "+ this.character._id);
    this.sharedService.favoritesObject.removeId(id);
  }
  turn(){
    if(this.isFront){
      this.addTurnClass;
    }else{
      this.addReTurnClass;
    }
    this.isFront = !this.isFront;    
  }
  addTurnClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.cardDiv.nativeElement, "re-turn")
    this.renderer.addClass(this.cardDiv.nativeElement, "turn");    
  }
  addReTurnClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.cardDiv.nativeElement, "turn")
    this.renderer.addClass(this.cardDiv.nativeElement, "re-turn");    
=======
  @Input() character!: Character;
  @ViewChild('card') cardDiv!: ElementRef;

  texto: string;
  isFront: boolean;

  constructor(private renderer: Renderer2) {
    this.texto = '';
    this.isFront = true;
  }

  addTurnClass() {
    this.renderer.removeClass(this.cardDiv.nativeElement, 'card-returning');
    this.renderer.addClass(this.cardDiv.nativeElement, 'card-turning');
    console.log('turn class');
  }
  removeTurnClass() {
    this.renderer.removeClass(this.cardDiv.nativeElement, 'card-turning');
    this.renderer.addClass(this.cardDiv.nativeElement, 'card-returning');
    console.log('remove turn class');
  }

  functionClick() {
    if (this.isFront) {
      this.addTurnClass();
    } else {
      this.removeTurnClass();
    }
    this.isFront = !this.isFront;
>>>>>>> 3bd2fff1d5b3a5ad749f47275b9b71d79d5e8418
  }
}
