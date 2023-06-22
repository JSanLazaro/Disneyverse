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

  @Output () enviarPadre = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {
    
  }
  functionClick2(){
/*     let text = this.renderer.createText("<img src=../../../assets/images/star.jpg");
    this.enviarPadre.emit(this.renderer.appendChild(this.starDiv1.nativeElement, text)!); */

   /*  let img = this.renderer.createElement('img');
    let pathSrc = this.renderer.setAttribute(img, 'src', '../../../assets/images/star.jpg');
    this.enviarPadre.emit(this.renderer.appendChild(this.starDiv1.nativeElement, pathSrc)!); */

    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', '../../../assets/images/star.jpg');
    this.enviarPadre.emit(this.renderer.appendChild(this.starDiv1.nativeElement, img)!);

}

ngAfterViewInit() {
/*   let text = this.renderer.createText("my button");
  this.renderer.appendChild(this.starDiv1.nativeElement, text); */
}
}

