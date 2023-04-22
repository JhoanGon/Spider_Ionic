import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{

  @Input() inputValue: string;
  @Input() inputPlaceholder: string[];

  @Output() inputValueChange = new EventEmitter();

  onInputChange() {
    setTimeout(() => {
      this.inputValueChange.emit(this.inputValue);
    }, 300);
  }
}
