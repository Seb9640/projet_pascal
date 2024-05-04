import { Pipe, PipeTransform } from '@angular/core';
import { blobToUrl } from 'helpers/utiles';

@Pipe({
  name: 'displayValue',
  standalone: true
})
export class DisplayValuePipe implements PipeTransform {

  transform(value: unknown, key: any): unknown {
   if(value instanceof Blob){
    value =  blobToUrl(value)

    return `<img src='${value}' width='100' height='80' alt='${key}'  />`
   }
    
    return value;
  }

}
