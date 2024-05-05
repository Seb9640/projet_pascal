import { Pipe, PipeTransform } from '@angular/core';
import { blobToUrl } from 'helpers/utiles';

@Pipe({
  name: 'displayValue',
  standalone: true
})
export class DisplayValuePipe implements PipeTransform {

  transform(value: unknown, key: any): unknown {
    if (value instanceof Blob) {
      value = blobToUrl(value);
      return `<img src='${value}' width='100' height='80' alt='${key}' />`;
    } else if (typeof value === 'string' && value.startsWith('assets')) {
      return `<img src='${value}' width='100' height='80' alt='${key}' />`;
    }
    else if (['birthdate', 'updatedat', 'createdat'].includes(key.toLowerCase())) {
      return (new Date(value as string)).toLocaleDateString()
    }
    else if (key.toLowerCase() === 'password') {
      let result = ""
      for (let index = 0; index < key.length; index++) {
        result += "*"
      }
      return result
    }

    return value;
  }

}
