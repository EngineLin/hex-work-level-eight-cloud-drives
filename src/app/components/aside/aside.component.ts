import { Component, OnInit } from '@angular/core';
import { FileService, ITableRow } from '../../services/file.service';
import { FILE_TYPE, FILE_TYPE_TO_ICON_PATH_ADAPTER } from '../../utils/FILE_TYPE';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.styl']
})
export class AsideComponent implements OnInit {

  constructor(private fileService: FileService) { }

  fileData: ITableRow | null = null;
  FILE_TYPE = FILE_TYPE;
  FILE_TYPE_TO_ICON_PATH_ADAPTER = FILE_TYPE_TO_ICON_PATH_ADAPTER;

  get fileDataContent(): ITableRow[] | null {
    return this.fileData?.content as ITableRow[];
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.fileService.subFile$.subscribe(value => this.fileData = value);
  }

}
