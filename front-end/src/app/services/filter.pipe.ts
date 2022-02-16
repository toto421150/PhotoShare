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
      // console.log(String(item[Object.keys(item)[1]]))
      // {id:data[i].id,comment:data[i].comment,url:this.imageData[i].url,name:this.imageData[i].name}
      return String(item[Object.keys(item)[1]]).toLowerCase().includes(searchText.toLowerCase());//Retourne les objets filtrés par rapport aux commentaires seulement
      }); 
   }
}