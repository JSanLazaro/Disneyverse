import { Component, Output, OnInit, Input, ElementRef, Renderer2, AfterViewInit, EventEmitter } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
@Component({
  selector: 'app-maincardturn',
  templateUrl: './maincardturn.component.html',
  styleUrls: ['./maincardturn.component.scss']
/*   template: `<app-maincard> (mensaje)="recibirMensaje($event)"></app-maincard>` */
})
export class MaincardturnComponent{
@Input() character!:Character;
/* @Output() mensaje:string = "Hola"; */

@Input() mensaje: any 

containeridlower!:ElementRef

constructor(private renderer: Renderer2){



  }


  
   ngAfterViewInit () {
  const containeridlower =  this.renderer.selectRootElement('#maincard_bloq_turn'); 
  return containeridlower
  } 



  
}

