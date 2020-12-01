import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.styl']
})
export class PlusButtonComponent {
  @Output() clickEvent = new EventEmitter<string>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
