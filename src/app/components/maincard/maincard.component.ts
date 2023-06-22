import { Component,ElementRef,Input,ViewChild } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';
import { Renderer2 } from '@angular/core';

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
  greet(){
    const cardElement = document.getElementById("card");
    // if(cardElement && this.isFront){
    //   cardElement.style.transform = "rotateY(180deg)";
    //   this.isFront = !this.isFront;
    // }else if(cardElement && !this.isFront){
    //   cardElement.style.transform = "rotateY(360deg)"; 
    //   this.isFront = !this.isFront;
    // }
    
    // this.texto ="hola"
    // alert("popup en saludar de componente maincard")
  }
  addToFavorites(){
    console.log("added to favorites "+ this.character._id);
    this.sharedService.favoritesObject.addId(this.character._id);
  }
  removeFromFavoties(id:number){
    this.sharedService.favoritesObject.removeId(id);
  }
  turn(){
    let selector = "card";
    const card = this.cardDiv;
    this.addMyClass();
    console.log("turn card")
  }
  addMyClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.addClass(this.cardDiv.nativeElement, "my-class");
  }

  removeMyClass(){
    //this.myButton.nativeElement.classList.remove("my-class"); //BAD PRACTICE
    this.renderer.removeClass(this.cardDiv.nativeElement, "my-class");
  }
}
