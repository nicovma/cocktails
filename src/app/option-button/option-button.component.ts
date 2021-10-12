import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Input() disabled: boolean = false;
  @Output() optionButtonValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue(value: string){
    this.optionButtonValueChange.emit(value);
  }

}
