import { Component,ElementRef,Input,ViewChild } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';
import { Renderer2 } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent {
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
  }
}
