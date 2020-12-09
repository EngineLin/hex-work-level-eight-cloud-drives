import { Component, EventEmitter, Input, Output } from '@angular/core';
import { initTableRow, ITableRow } from '../../services/file.service';
import { FILE_TYPE, FILE_TYPE_TO_ICON_PATH_ADAPTER } from 'src/app/utils/FILE_TYPE';

@Component({
  selector: 'app-grid-file',
  templateUrl: './grid-file.component.html',
  styleUrls: ['./grid-file.component.styl']
})
export class GridFileComponent {
  @Input() data: ITableRow = initTableRow();

  @Output() clickEvent = new EventEmitter<ITableRow>();
  @Output() doubleClickEvent = new EventEmitter<ITableRow>();

  FILE_TYPE = FILE_TYPE;
  FILE_TYPE_TO_ICON_PATH_ADAPTER = FILE_TYPE_TO_ICON_PATH_ADAPTER;

  onClick(): void {
    this.clickEvent.emit(this.data);
  }

  onDoubleClick(): void {
    this.doubleClickEvent.emit(this.data);
  }
}
