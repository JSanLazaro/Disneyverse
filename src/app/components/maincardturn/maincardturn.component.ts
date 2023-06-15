import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincardturn',
  templateUrl: './maincardturn.component.html',
  styleUrls: ['./maincardturn.component.scss']
})
export class MaincardturnComponent implements OnInit{
  @Input() containeridlower = document.getElementById('maincard_bloq_turn')

  constructor() { }

  ngOnInit(): void {
    if (this.container) {
      this.containeridsuperior = document.getElementById('maincard_bloq');
    } else {
      this.containeridlower = document.getElementById('maincard_bloq_turn');
    }
  }
}

