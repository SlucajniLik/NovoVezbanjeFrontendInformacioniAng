import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, limit?:number): string {
    
let num =limit==null?2:limit;

return value.substring(0,num)+"Vezba pipe"



  }

}
