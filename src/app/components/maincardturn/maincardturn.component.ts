import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincardturn',
  templateUrl: './maincardturn.component.html',
  styleUrls: ['./maincardturn.component.scss']
})
export class MaincardturnComponent{
  @Output() containeridlower = document.getElementById('maincard_bloq_turn')




}

