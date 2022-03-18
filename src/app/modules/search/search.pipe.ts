import { Pipe, PipeTransform } from '@angular/core';
import { IArticle } from 'src/app/core/models/nyt.response.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: IArticle[], searchValue: string): any {
    let filtteredArr;
    if (value.length === 0 || searchValue === '') {
      return value;
    }
    else {
      filtteredArr = value.filter((x) =>
        x.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      );
      return filtteredArr;
    }



  }

}
