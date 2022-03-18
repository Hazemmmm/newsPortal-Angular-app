import { IArticle } from 'src/app/core/models/nyt.response.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IArticle[], filterCategoryName: string): any {

    if (value.length === 0 || filterCategoryName === '') {
      return value;
    }
    return value.filter((x) => x.section === filterCategoryName);

  }
}
