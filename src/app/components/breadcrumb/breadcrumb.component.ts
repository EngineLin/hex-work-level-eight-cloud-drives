import { Component, OnInit } from '@angular/core';
import { NavigatorService, TAB_NAME_TO_TAB_TYPE, TAB_TYPE_TO_TAB_NAME } from '../../services/navigator.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.styl']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private navigatorService: NavigatorService) { }

  paths: string[] = [];

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.navigatorService.subPaths$.subscribe(value => this.paths = value);
  }

  onClick(path: string): void {
    const tabType = TAB_NAME_TO_TAB_TYPE[path]
    this.navigatorService.setTab(tabType);
    this.navigatorService.setPaths([TAB_TYPE_TO_TAB_NAME[tabType]]);
  }
}
