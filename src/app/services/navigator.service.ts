import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum TAB_TYPE {
  PRIVATE,
  PUBLIC,
  IMPORTANT,
  TRASH
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
  private paths: string[] = [];

  subTab$ = new BehaviorSubject<TAB_TYPE>(this.tab);
  subToggle$ = new BehaviorSubject<TOGGLE_TYPE>(this.toggle);
  subPaths$ = new BehaviorSubject<string[]>(this.paths);

  setTab(value: TAB_TYPE): void {
    this.subTab$.next(value);
  }

  setToggle(value: TOGGLE_TYPE): void {
    this.subToggle$.next(value);
  }

  // setPaths(value: sting[]): void {
  //   this.subPaths$.next(value);
  // }
}
