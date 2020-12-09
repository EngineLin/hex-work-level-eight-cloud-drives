import { Component, OnInit } from '@angular/core';
import { FileService, ITableRow } from '../../services/file.service';
import { FILE_TYPE } from '../../utils/FILE_TYPE';
import { NavigatorService } from '../../services/navigator.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.styl']
})
export class GridComponent implements OnInit {
  constructor(
    private fileService: FileService,
    private navigatorService: NavigatorService
  ) { }

  filesData: ITableRow[] = [];
  paths: string[] = [];

  get folders(): ITableRow[] {
    return this.filesData.filter(file => file.type === FILE_TYPE.FOLDER);
  }

  get files(): ITableRow[] {
    return this.filesData.filter(file => file.type !== FILE_TYPE.FOLDER);
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fileService.subFiles$.subscribe(value => this.filesData = value);
    this.navigatorService.subPaths$.subscribe(value => this.paths = value);
  }

  onFolderClick(row: ITableRow): void {
    this.fileService.fetchFile(row.id);
  }

  onFolderDoubleClick(row: ITableRow): void {
    this.navigatorService.setPaths([...this.paths, row.name]);
    this.fileService.fetchFolder(row.id);
  }

  onFileClick(row: ITableRow): void {
    this.fileService.fetchFile(row.id);
  }

  onFileDoubleClick(row: ITableRow): void {
    this.fileService.fetchContent(row.id);
    this.fileService.setIsOpen(true);
  }
}
