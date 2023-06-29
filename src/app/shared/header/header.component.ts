import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuMovil') menuMovil!: ElementRef;

  isFront: boolean;
  
  constructor(private renderer: Renderer2) {
    this.isFront = true;
  }
  
  openMenu(){
    const menu = this.menuMovil.nativeElement;
    if(this.isFront){
        this.renderer.addClass(menu, 'MostrarMenu')
      this.renderer.removeClass(menu, 'OcultarMenu')
      this.renderer.removeClass(menu, 'ocultarDisplay');  
   }
    else{
      this.renderer.removeClass(menu, 'MostrarMenu')
      this.renderer.addClass(menu, 'OcultarMenu') 
      setTimeout(() => {
        this.renderer.addClass(menu, 'ocultarDisplay');
      }, 900);  
  }
     this.isFront = !this.isFront; 
  }
}
