import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'column',
  standalone: true
})
export class ColumnPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return ''; // Gérer les valeurs nulles ou vides
    return value.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
