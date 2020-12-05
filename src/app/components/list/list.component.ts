import { Component, OnInit } from '@angular/core';
import { FILE_TYPE, FILE_TYPE_TO_ICON_PATH_ADAPTER, FILE_TYPE_TO_NAME } from 'src/app/utils/FILE_TYPE';
import { FileService, ITableRow } from '../../services/file.service';

export enum SORT_TYPE {
  NAME,
  UPDATE_TIME,
  TYPE,
  OWNER,
  SIZE
}

const sortTypeToPropertyAdapter = {
  [SORT_TYPE.NAME]: 'name',
  [SORT_TYPE.UPDATE_TIME]: 'updateTime',
  [SORT_TYPE.TYPE]: 'type',
  [SORT_TYPE.OWNER]: 'owner',
  [SORT_TYPE.SIZE]: 'size'
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  constructor(private filesService: FileService) {
  }

  sortType = SORT_TYPE.NAME;

  tableData: ITableRow[] = [];

  SORT_TYPE = SORT_TYPE;
  FILE_TYPE_TO_ICON_PATH_ADAPTER = FILE_TYPE_TO_ICON_PATH_ADAPTER;


  get localTableData(): ITableRow[] {
    const property: string = sortTypeToPropertyAdapter[this.sortType];
    return this.tableData.sort((a: ITableRow, b: ITableRow) => {
      // return a[property] - b[property];
      return a.id - b.id;
    });
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.filesService.subFiles$.subscribe(value => this.tableData = value);
  }

  onSortClick(sortType: SORT_TYPE): void {
    this.sortType = sortType;
  }

  onRowClick(row: ITableRow): void {
    this.filesService.fetchFile(row.id);
  }

  onRowDoubleClick(row: ITableRow): void {
    if (row.type === FILE_TYPE.FOLDER) {
      this.filesService.fetchFolder(row.id);
    }
  }
}
