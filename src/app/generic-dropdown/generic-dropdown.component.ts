import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-dropdown',
  templateUrl: './generic-dropdown.component.html',
  styleUrls: ['./generic-dropdown.component.scss'],
})
export class GenericDropdownComponent implements OnInit {
  title = 'Dropdown';
  selectedValue: any;
  optionLength: boolean = false;
  @Input() options: any = [];
  @Input() placeholder = 'please choose';
  @Output() onSelection = new EventEmitter();

  constructor() {}
  ngOnInit() {
    if(this.options.length > 6) {
      this.optionLength = true;
    }
  }
  setCurrentSelection(option: any) {
    this.selectedValue = option.value;
    this.onSelection.emit(option);
    console.log(this.options);
  }
}
