import { Component, OnInit } from '@angular/core';

import { NavigatorService, TAB_TYPE, TOGGLE_TYPE } from './services/navigator.service';
import { UserService } from './services/user.service';
import { FileService } from './services/file.service';

export interface ITab {
  label: string;
  value: TAB_TYPE;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {

  constructor(
    private navigatorService: NavigatorService,
    private userService: UserService,
    private fileService: FileService
  ) {
  }

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

  TOGGLE_TYPE = TOGGLE_TYPE;


  tabValue: TAB_TYPE = TAB_TYPE.PRIVATE;
  toggleValue: TOGGLE_TYPE = TOGGLE_TYPE.LIST;

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // Bind toggle and tab value
    this.navigatorService.subToggle$.subscribe(value => this.toggleValue = value);
    this.navigatorService.subTab$.subscribe(value => {
      this.tabValue = value;

      // Default value is 0: private
      this.fileService.fetchMain(value);
    });

    // Default fetch data
    // User Info
    this.userService.fetchUserInfo();
  }

  onButtonClick(type: string): void {
    alert(`我後端還沒厲害到能做出這個功能: ${type}`);
  }
}
