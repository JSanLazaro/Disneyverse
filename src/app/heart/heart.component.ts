import { Component } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})
export class HeartComponent {
name = 'heartImg';
value = '../../../assets/images/heartBlack.png'; //default_value

updateImage() {
  this.value = '../../../assets/images/heartRed.png';
}
}


