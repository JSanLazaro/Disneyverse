import { Component,ElementRef,Input,ViewChild } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.scss']
})
export class FavCardComponent {
  @Input() character!:Character;
  @ViewChild('card') cardDiv!: ElementRef;
  isFront:boolean;
  constructor(private sharedService: SharedService,private renderer: Renderer2){    
    this.isFront = true;
  }
  turn(){
    if(this.isFront){
      this.addTurnClass();
    }else{
      this.addReTurnClass();
    }
    this.isFront = !this.isFront; 
    console.log("isFront: " + this.isFront);
  }
  
  removeFromFavoties(){
    console.log("removed to favorites "+ this.character._id);
    this.sharedService.favoritesObject.removeId(this.character._id);
  }

  addTurnClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    console.log("turning");
    this.renderer.removeClass(this.cardDiv.nativeElement, "re-turn")
    this.renderer.addClass(this.cardDiv.nativeElement, "turn");    
  }
  addReTurnClass(){
    console.log("returning");
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.cardDiv.nativeElement, "turn")
    this.renderer.addClass(this.cardDiv.nativeElement, "re-turn");    
  }

  removeMyClass(){
    //this.myButton.nativeElement.classList.remove("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.cardDiv.nativeElement, "my-class");
  }
}
