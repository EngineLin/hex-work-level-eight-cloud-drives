import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NavigatorService, TOGGLE_TYPE } from '../../services/navigator.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.styl']
})
export class ToggleComponent implements OnInit {
  @Input() type: TOGGLE_TYPE = TOGGLE_TYPE.LIST;
  @Output() clickEvent = new EventEmitter<TOGGLE_TYPE>();

  toggleValue: TOGGLE_TYPE = TOGGLE_TYPE.LIST;
  TOGGLE_TYPE = TOGGLE_TYPE;

  constructor(private navigatorService: NavigatorService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.navigatorService.subToggle$.subscribe(value => this.toggleValue = value);
  }

  onClick(): void {
    this.navigatorService.setToggle(this.type);
  }
}
