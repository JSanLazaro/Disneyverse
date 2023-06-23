import { Component, ViewChild, ElementRef, Renderer2, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-favoriterating',
  templateUrl: './favoriterating.component.html',
  styleUrls: ['./favoriterating.component.scss']
})
export class FavoriteratingComponent implements AfterViewInit {
  @ViewChild('star1') starDiv1!: ElementRef;
  @ViewChild('star2') starDiv2!: ElementRef;
  @ViewChild('star3') starDiv3!: ElementRef;
  @ViewChild('star4') starDiv4!: ElementRef;
  @ViewChild('star5') starDiv5!: ElementRef;
  @ViewChild('p') p!: ElementRef;

  @Output () enviarPadre = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {
    
  }
  functionClick1star(){

  
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', '../../../assets/images/star.jpg');
    this.renderer.addClass(img, 'stars');
    const parent = this.p.nativeElement;
    this.renderer.appendChild(this.starDiv1.nativeElement, img);
    this.enviarPadre.emit(this.renderer.addClass(parent, 'ocultar')!);
    this.enviarPadre.emit(this.renderer.insertBefore(parent, img, this.renderer.nextSibling(parent))!);
    

 

}

functionClick2star(){

}

functionClick3star(){

}

functionClick4star(){

}

functionClick5star(){

}

ngAfterViewInit() {

}
}

