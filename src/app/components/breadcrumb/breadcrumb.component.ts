import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../../services/navigator.service';

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

}
