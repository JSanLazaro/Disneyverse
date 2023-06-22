import { HtmlParser } from '@angular/compiler';
import {
  Component,
  Input,
  ViewChild,
  OnInit,
  Renderer2,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Character } from 'src/app/model/Character.model';
import { MaincardturnComponent } from 'src/app/components/maincardturn/maincardturn.component';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: [
    './maincard.component.scss',
    '../maincardturn/maincardturn.component.scss',
  ],
})
export class MaincardComponent {
  @Input() character!: Character;
  @ViewChild('card') cardDiv!: ElementRef;

  texto: string;
  isFront: boolean;

  constructor(private renderer: Renderer2) {
    this.texto = '';
    this.isFront = true;
  }

  addTurnClass() {
    this.renderer.removeClass(this.cardDiv.nativeElement, 'card-returning');
    this.renderer.addClass(this.cardDiv.nativeElement, 'card-turning');
    console.log('turn class');
  }
  removeTurnClass() {
    this.renderer.removeClass(this.cardDiv.nativeElement, 'card-turning');
    this.renderer.addClass(this.cardDiv.nativeElement, 'card-returning');
    console.log('remove turn class');
  }

  functionClick() {
    if (this.isFront) {
      this.addTurnClass();
    } else {
      this.removeTurnClass();
    }
    this.isFront = !this.isFront;
    console.log('functionClick ' + this.isFront);
  }
}
