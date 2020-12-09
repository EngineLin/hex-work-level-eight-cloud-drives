import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { NavigatorService, TAB_TYPE } from '../../services/navigator.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.styl']
})
export class SearchBarComponent implements OnInit {
  constructor(
    private fileService: FileService,
    private navigatorService: NavigatorService
  ) {}

  text = '';
  complete: string[] = [];
  records: string[] = [];

  get completeStyle(): object {
    return {
      height: `${this.complete.length * 32}px`
    };
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fileService.subComplete$.subscribe(value => this.complete = value);
  }

  addRecord(text: string): void {
    if (!this.records.some(word => word === text)) {
      this.records.push(text);
    }
  }

  onType(e: Event): void {
    // @ts-ignore
    const value: string = e.target.value;
    this.text = value;
    if (!value) {
      this.complete = [];
      return;
    }
    this.fileService.postComplete({text: value});
  }

  onEnter(): void {
    this.addRecord(this.text);
    this.navigatorService.setPaths([]);
    this.navigatorService.setTab(TAB_TYPE.NONE);
    this.fileService.postSearch({ text: this.text });
  }

  onCompleteItemClick(text: string): void {
    this.text = text;
    this.complete = [];
    this.addRecord(this.text);
    this.navigatorService.setPaths([]);
    this.navigatorService.setTab(TAB_TYPE.NONE);
    this.fileService.postSearch({text});
  }

  onMoreClick(): void {
    if (this.complete.length) {
      this.complete = [];
    } else {
      this.complete = this.records;
    }
  }
}
