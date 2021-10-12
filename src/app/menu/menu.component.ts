import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() isDetail: boolean = true;
  @Input() title: string = '';
  


  constructor() { }

  ngOnInit(): void {
  }

}
