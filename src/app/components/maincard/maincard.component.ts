import { Component,Input } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent {
  @Input() character!:Character;
  texto:string;
  isFront:boolean;
  constructor(private sharedService: SharedService){
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
    this.sharedService.favorites.addId(this.character._id);
  }
  removeFromFavoties(id:number){
    this.sharedService.favorites.removeId(id);
  }
}
