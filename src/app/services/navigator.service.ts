import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum TAB_TYPE {
  PRIVATE,
  PUBLIC,
  IMPORTANT,
  TRASH,
  NONE
}

export const TAB_TYPE_TO_TAB_NAME = {
  [TAB_TYPE.PRIVATE]: '我的抽屜',
  [TAB_TYPE.PUBLIC]: '公用抽屜',
  [TAB_TYPE.IMPORTANT]: '重要抽屜',
  [TAB_TYPE.TRASH]: '垃圾桶',
  [TAB_TYPE.NONE]: ''
};

export const TAB_NAME_TO_TAB_TYPE = {
  [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PRIVATE]]: TAB_TYPE.PRIVATE,
  [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PUBLIC]]: TAB_TYPE.PUBLIC,
  [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.IMPORTANT]]: TAB_TYPE.IMPORTANT,
  [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.TRASH]]: TAB_TYPE.TRASH,
  [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.NONE]]: TAB_TYPE.NONE,
}

export enum TOGGLE_TYPE {
  LIST,
  GRID,
}

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private tab: TAB_TYPE = TAB_TYPE.PRIVATE;
  private toggle: TOGGLE_TYPE = TOGGLE_TYPE.LIST;
  private paths: string[] = [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PRIVATE]];

  subTab$ = new BehaviorSubject<TAB_TYPE>(this.tab);
  subToggle$ = new BehaviorSubject<TOGGLE_TYPE>(this.toggle);
  subPaths$ = new BehaviorSubject<string[]>(this.paths);

  setTab(value: TAB_TYPE): void {
    this.subTab$.next(value);
  }

  setToggle(value: TOGGLE_TYPE): void {
    this.subToggle$.next(value);
  }

  setPaths(value: string[]): void {
    this.subPaths$.next(value);
  }
}
