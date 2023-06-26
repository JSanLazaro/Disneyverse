import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuMovil') menuMovil!: ElementRef;

  isFront: boolean;
  
  constructor(private renderer: Renderer2) {
    this.isFront = true;
  }
  

  functionClick(){
    const menu = this.menuMovil.nativeElement;
    if(this.isFront){
    this.renderer.addClass(menu, 'MostrarMenu')
    }
    else{
      this.renderer.removeClass(menu, 'MostrarMenu')
    }
    this.isFront = !this.isFront;
  }




}
