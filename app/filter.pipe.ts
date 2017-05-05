import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(masterAnimalList: any, term: any): any {
    if (term === undefined) return masterAnimalList;
    return masterAnimalList.filter(function(animal){
      return animal.species.toLowerCase().includes(term.toLowerCase());
    })
  }
}
