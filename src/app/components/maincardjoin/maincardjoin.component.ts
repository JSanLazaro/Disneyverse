import { style } from '@angular/animations';
import { Component, Input, ViewChild, OnInit,  Renderer2, ElementRef, AfterViewInit   } from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import {MaincardturnComponent} from 'src/app/components/maincardturn/maincardturn.component';
import {MaincardComponent} from 'src/app/components/maincard/maincard.component';

@Component({
  selector: 'app-maincardjoin',
  templateUrl: './maincardjoin.component.html',
  styleUrls: ['./maincardjoin.component.scss'],
/*   template: `<app-maincardturn><p>{{mensaje}}</p></app-maincardturn>` */
})
export class MaincardjoinComponent {
/* @Input() character!:Character; 
/*  @Input() containeridlower!:ElementRef;  */
/* containeridlowerParent!:ElementRef; 

mensaje= ""

recibirMensaje(mensaje: string) {
  this.mensaje = mensaje;
  console.log(this.mensaje) 
} */



/* @ViewChild(MaincardturnComponent) child !: MaincardturnComponent; 

  mensaje!: string;

ngAfterViewInit(){
  
this.mensaje = this.child.mensaje; 
console.log(this.mensaje);
} */





/* @ViewChild(MaincardturnComponent) child !: MaincardturnComponent;  
   ngOnInit() {  
/*     this.containeridlowerParent = this.child.containeridlower;   */
  
  
  constructor(private renderer: Renderer2){
 /*    this.containeridlowerParent = this.child.containeridlower; */
  }

/*   greet(){
    this.containeridlowerParent = this.containeridlower;
    console.log(this.containeridlowerParent);

    console.log("connected");
    const cardElement = document.getElementById("maincard_bloq")
    /* this.containeridlowerParent = this.child.containeridlower; */
    /* console.log(this.containeridlowerParent); */
/*     if(container1){ */
     /*  console.log("connected2");
      cardElement?.setAttribute("z-index", "1");
      this.renderer.setAttribute(this.containeridlowerParent.nativeElement, "z-index", "2");
      this.renderer.setAttribute(this.containeridlowerParent.nativeElement, "display", "block");
      this.renderer.setAttribute(this.containeridlowerParent.nativeElement,"opacity", "0.8"); */



/*   }  */



}

