import { Component, Input, OnInit } from '@angular/core';

import { NavigatorService, TAB_TYPE, TAB_TYPE_TO_TAB_NAME } from '../../services/navigator.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl'],
})
export class TabComponent implements OnInit {
  @Input() label = '';
  @Input() value: TAB_TYPE = TAB_TYPE.PRIVATE;

  tabValue: TAB_TYPE = TAB_TYPE.PRIVATE;

  constructor(private navigatorService: NavigatorService) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.navigatorService.subTab$.subscribe(value => this.tabValue = value);
  }

  onClick(): void {
    this.navigatorService.setTab(this.value);
    this.navigatorService.setPaths([TAB_TYPE_TO_TAB_NAME[this.value]]);
  }
}
