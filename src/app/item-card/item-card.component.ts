import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../intefaces/Cocktail';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() cocktail: Cocktail | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
