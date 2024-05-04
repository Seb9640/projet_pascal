import { Pipe, PipeTransform } from '@angular/core';
import { blobToUrl } from 'helpers/utiles';

@Pipe({
  name: 'getLink',
  standalone: true
})
export class GetLinkPipe implements PipeTransform {

  transform(value: unknown ): unknown {
    if(value instanceof Blob){
     return  blobToUrl(value)
    }
     
     return value;
   }

}
