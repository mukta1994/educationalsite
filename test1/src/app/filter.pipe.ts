import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(obj : any, subj: string): any[] {
        if (obj) {
            return obj.filter((listing: any) => listing.sub === subj);
        }
    }
}