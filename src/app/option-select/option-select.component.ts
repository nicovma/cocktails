import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-select',
  templateUrl: './option-select.component.html',
  styleUrls: ['./option-select.component.css']
})
export class OptionSelectComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Input() title: string = '';
  @Output() optionSelectValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue(value: string){
    this.optionSelectValueChange.emit(value);
  }

}
