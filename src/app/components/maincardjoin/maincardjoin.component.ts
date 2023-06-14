import { Component } from '@angular/core';

@Component({
  selector: 'app-maincardjoin',
  templateUrl: './maincardjoin.component.html',
  styleUrls: ['./maincardjoin.component.scss']
})
export class MaincardjoinComponent {
  maincardturn1(){
    console.log("connected");
    let card = document.getElementById('maincard_bloq')
    let card2 = document.getElementById('maincard_bloq_turn')
    if(card?.style.opacity == "1"){
      if(card2){
        card2.style.transform = "rotate(45deg)"
        card2.style.opacity = "0.9"

      }
      
    }
  }
}
