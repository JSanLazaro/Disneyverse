import { Component } from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.scss']
})
export class MaincardComponent  implements OnInit{
  constructor() { }
  let container: string
    ngOnInit(): void {
      if (container) {
        const containeridsuperior = document.getElementById('maincard_bloq');
      } else {
        const containeridlower = document.getElementById('maincard_bloq_turn');
      }
    }
  

  maincardturn1(){}


}
