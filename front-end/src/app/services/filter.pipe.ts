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
      // console.log(item[Object.keys(item)[2]])
      // key0 : url, key1: name, key2: comment
      return String(item[Object.keys(item)[2]]).toLowerCase().includes(searchText.toLowerCase());//Retourne les objets filtrés par rapport aux commentaires seulement
      }); 
   }
}

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if (!items) return [];
//     if (!searchText) return items;
  
//     return items.filter(item => {
//       return Object.keys(item).some(key => {
//         return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
//       });
//     });
//    }
// }