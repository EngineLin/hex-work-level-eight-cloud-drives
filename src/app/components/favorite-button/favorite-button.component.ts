import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.styl']
})
export class FavoriteButtonComponent implements OnChanges {
  constructor(private fileService: FileService) {}

  @Input() active = false;
  @Input() id = -1;

  localActive = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.localActive = changes.active.currentValue;
  }

  onClick(): void {
    this.fileService.postFavorite({id: this.id, favorite: !this.active});
    this.localActive = !this.localActive;
  }
}
