import { Component, OnInit } from '@angular/core';
import { FileService, initTableRow, ITableRow } from '../../services/file.service';
import { FILE_TYPE } from '../../utils/FILE_TYPE';

@Component({
  selector: 'app-file-popup',
  templateUrl: './file-popup.component.html',
  styleUrls: ['./file-popup.component.styl']
})
export class FilePopupComponent implements OnInit {
  constructor(private fileService: FileService) { }

  data: ITableRow = initTableRow();
  isOpen = false;
  FILE_TYPE = FILE_TYPE;

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fileService.subContent$.subscribe(value => this.data = value);
    this.fileService.subIsPopupOpen$.subscribe(value => this.isOpen = value);
  }

  onPopupClick(): void {
    this.fileService.setIsOpen(false);
  }
}
