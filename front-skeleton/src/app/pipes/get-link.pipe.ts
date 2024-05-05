import { Pipe, PipeTransform } from '@angular/core';
import { blobToUrl } from 'helpers/utiles';

@Pipe({
  name: 'getLink',
  standalone: true
})
export class GetLinkPipe implements PipeTransform {

  transform(value: unknown ): unknown {
    console.log({value});

    if(value instanceof Blob){
     return  blobToUrl(value)
    } else if (typeof value === 'string' && value.startsWith('assets')) {
      return value;
    }


     return value;
   }

}
