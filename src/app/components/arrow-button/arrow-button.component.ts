import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.styl']
})
export class ArrowButtonComponent {
  @Input() active = false;
  @Output() clickEvent = new EventEmitter<boolean>();

  onClick(): void {
    this.clickEvent.emit(!this.active);
  }
}
