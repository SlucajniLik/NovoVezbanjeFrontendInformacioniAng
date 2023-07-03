import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value:string): string {
    if (value === 'prva') {
      return 'red';
    } else if (value === 'druga') {
      return 'blue';
    } else if (value === 'treca') {
      return 'green';
    } else {
      return 'white'; // Default background color
    }
  }

}
