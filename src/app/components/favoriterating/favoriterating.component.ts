import { Component, ElementRef, Renderer2, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';

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
    this.renderer.setAttribute(img, 'src', '../../../assets/images/star.svg');
    this.renderer.addClass(img, 'stars');
    const hideImg = this.starDiv1.nativeElement;
    const hideImg2 = this.starDiv2.nativeElement;
    const hideImg3 = this.starDiv3.nativeElement;
    const hideImg4 = this.starDiv4.nativeElement;
    const hideImg5 = this.starDiv5.nativeElement;
    this.enviarPadre.emit(this.renderer.removeClass(hideImg, 'ocultar')!);
    this.enviarPadre.emit(this.renderer.addClass(hideImg2, 'ocultar')!);
    this.enviarPadre.emit(this.renderer.addClass(hideImg3, 'ocultar')!);
    this.enviarPadre.emit(this.renderer.addClass(hideImg4, 'ocultar')!);
    this.enviarPadre.emit(this.renderer.addClass(hideImg5, 'ocultar')!);
/*     this.enviarPadre.emit(this.renderer.insertBefore(parent, img, this.renderer.nextSibling(parent))!); */
}
 
functionClick2star(){
  const img = this.renderer.createElement('img');
  this.renderer.setAttribute(img, 'src', '../../../assets/images/star.svg');
  this.renderer.addClass(img, 'stars');
  const parent = this.p.nativeElement;
  const hideImg = this.starDiv1.nativeElement;
  const hideImg2 = this.starDiv2.nativeElement;
  const hideImg3 = this.starDiv3.nativeElement;
  const hideImg4 = this.starDiv4.nativeElement;
  const hideImg5 = this.starDiv5.nativeElement;
  this.enviarPadre.emit(this.renderer.removeClass(hideImg, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg2, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg3, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg4, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg5, 'ocultar')!);
}

functionClick3star(){
  const img = this.renderer.createElement('img');
  this.renderer.setAttribute(img, 'src', '../../../assets/images/star.svg');
  this.renderer.addClass(img, 'stars');
  const hideImg = this.starDiv1.nativeElement;
  const hideImg2 = this.starDiv2.nativeElement;
  const hideImg3 = this.starDiv3.nativeElement;
  const hideImg4 = this.starDiv4.nativeElement;
  const hideImg5 = this.starDiv5.nativeElement;
  this.enviarPadre.emit(this.renderer.removeClass(hideImg, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg2, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg3, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg4, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg5, 'ocultar')!);
}

functionClick4star(){
  const img = this.renderer.createElement('img');
  this.renderer.setAttribute(img, 'src', '../../../assets/images/star.svg');
  this.renderer.addClass(img, 'stars');
  const parent = this.p.nativeElement;
  const hideImg = this.starDiv1.nativeElement;
  const hideImg2 = this.starDiv2.nativeElement;
  const hideImg3 = this.starDiv3.nativeElement;
  const hideImg4 = this.starDiv4.nativeElement;
  const hideImg5 = this.starDiv5.nativeElement;
  this.enviarPadre.emit(this.renderer.removeClass(hideImg, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg2, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg3, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg4, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.addClass(hideImg5, 'ocultar')!);
}

functionClick5star(){
  const img = this.renderer.createElement('img');
  this.renderer.setAttribute(img, 'src', '../../../assets/images/star.svg');
  this.renderer.addClass(img, 'stars');
  const parent = this.p.nativeElement;
  const hideImg = this.starDiv1.nativeElement;
  const hideImg2 = this.starDiv2.nativeElement;
  const hideImg3 = this.starDiv3.nativeElement;
  const hideImg4 = this.starDiv4.nativeElement;
  const hideImg5 = this.starDiv5.nativeElement;
  this.enviarPadre.emit(this.renderer.removeClass(hideImg, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg2, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg3, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg4, 'ocultar')!);
  this.enviarPadre.emit(this.renderer.removeClass(hideImg5, 'ocultar')!);

}

ngAfterViewInit() {

}
}

