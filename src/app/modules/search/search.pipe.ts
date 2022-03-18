import { Pipe, PipeTransform } from '@angular/core';
import { IArticle } from 'src/app/core/models/nyt.response.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IArticle[], searchValue: string): any {
    if (value.length === 0 || searchValue === '') {
      return value;
    }
     return value.filter((x)=> x.title.toLowerCase().includes(searchValue.toLowerCase()));


  }

}
