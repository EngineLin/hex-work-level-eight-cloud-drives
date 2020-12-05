import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1024) {
      return value + 'KB';
    }
    if (value < 1024 * 1024) {
      return (value / 1024).toFixed(2) + 'MB';
    }
    if (value < 1024 * 1024 * 1024) {
      return (value / (1024 * 1024)).toFixed(2) + 'GB';
    }
    return '體積過大';
  }

}
