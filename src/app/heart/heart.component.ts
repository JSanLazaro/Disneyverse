import { Component, Renderer2, ViewChild, ElementRef, Input} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Character } from 'src/app/model/Character.model';
import { FavListComponent } from 'src/app/components/characters/fav-list/fav-list.component';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent {

  constructor(private renderer: Renderer2, private sharedService: SharedService) {}

  @Input() character!:Character;
@ViewChild('image') imageHeart!:  ElementRef;
isclicked!:boolean;

updateImage() {
  const imageHeart = this.imageHeart.nativeElement;
  if(this.isclicked){
   
    this.renderer.setAttribute(imageHeart, 'src', '../../../assets/images/heartBlack.png');
  }

  else{
    this.renderer.setAttribute(imageHeart, 'src', '../../../assets/images/heartRed.png');

  }
/*   this.isclicked = !this.isclicked; */

}
}


