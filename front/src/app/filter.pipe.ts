import { Pipe, PipeTransform } from '@angular/core';
//Pipeline de filtrage pour les photos
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
      return String(item[Object.keys(item)[1]]).toLowerCase().includes(searchText.toLowerCase());//Retourne les objets filtrés par rapport aux commentaires seulement
      }); 
   }
}
