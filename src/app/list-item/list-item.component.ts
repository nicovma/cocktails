import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../intefaces/Cocktail';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() items: Cocktail[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
