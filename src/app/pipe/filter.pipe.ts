import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../class/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Hero[], name: string): Hero[] {
    if (!Array.isArray(value) || !name) {
      return value;
    }
    return value.filter(item => item.name.toString().toLowerCase().includes(name.toLowerCase()));
  }

}
