import { Component, Input } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dropdown';
  public dropdownData = [
    { id: 1, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 1, value: 'Option 3' },
    { id: 1, value: 'Option 4' },
    { id: 1, value: 'Option 5' },
    { id: 1, value: 'Option 6' },
    { id: 1, value: 'Option 7' },
    { id: 1, value: 'Option 8' },
    { id: 1, value: 'Option 9' },
    { id: 1, value: 'Option 10' },
  ];
  tooltip = 'Select an option';
  selected: any;
  constructor() {}
  ngOnInit() {}
  dropdownClicked(event: any) {
    this.selected = event;
    console.log(this.selected, 'selected option data');
    console.log(this.selected.id, 'selected option id');
    console.log(this.selected.value, 'selected option value');
  }
}
