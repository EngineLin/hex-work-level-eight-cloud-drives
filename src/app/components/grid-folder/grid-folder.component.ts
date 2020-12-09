import { Component, EventEmitter, Input, Output } from '@angular/core';
import { initTableRow, ITableRow } from '../../services/file.service';

@Component({
  selector: 'app-grid-folder',
  templateUrl: './grid-folder.component.html',
  styleUrls: ['./grid-folder.component.styl']
})
export class GridFolderComponent {
  @Input() data: ITableRow = initTableRow();

  @Output() clickEvent = new EventEmitter<ITableRow>();
  @Output() doubleClickEvent = new EventEmitter<ITableRow>();

  onClick(): void {
    this.clickEvent.emit(this.data);
  }

  onDoubleClick(): void {
    this.doubleClickEvent.emit(this.data);
  }
}
