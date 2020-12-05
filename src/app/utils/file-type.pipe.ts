import { Pipe, PipeTransform } from '@angular/core';
import { FILE_TYPE, FILE_TYPE_TO_NAME } from './FILE_TYPE';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {

  transform(value: FILE_TYPE): string {
    return FILE_TYPE_TO_NAME[value];
  }

}
