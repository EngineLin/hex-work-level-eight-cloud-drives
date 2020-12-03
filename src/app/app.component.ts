import { Component } from '@angular/core';

import { TAB_TYPE, TOGGLE_TYPE } from './services/navigator.service';

export interface ITab {
  label: string;
  value: TAB_TYPE;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {

  tabs: ITab[] = [
    { label: '我的抽屜', value: TAB_TYPE.PRIVATE },
    { label: '公用抽屜', value: TAB_TYPE.PUBLIC },
    { label: '重要抽屜', value: TAB_TYPE.IMPORTANT },
    { label: '垃圾桶', value: TAB_TYPE.TRASH },
  ];

  toggles: TOGGLE_TYPE[] = [
    TOGGLE_TYPE.LIST,
    TOGGLE_TYPE.GRID
  ];

  onButtonClick(type: string): void {
    console.log(type);
  }
}
