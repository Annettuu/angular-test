import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    FormsModule,
  ]
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() onBlur = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<string>();

  onEnter(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}




