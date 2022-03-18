import { ArticleSections } from './../../../core/models/ArticleSections.enum';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { InteractService } from 'src/app/core/api/interact.service';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css'],
})
export class FilterCategoriesComponent implements OnInit {
  categories!: string[];
  selectedCategory!: any;

  constructor(private interactService: InteractService,private apiService: ApiService) {}

  ngOnInit() {
    console.log(this.selectedCategory);

    this.getCategoriesList();
  }
  getCategoriesList(): void {
    this.interactService.$cateogires.subscribe((res) => {
      this.categories = res;
    });
  }

  getSelectedCategory(): void {
    console.log(this.selectedCategory);
  }

  onChange(category: ArticleSections) {
    this.interactService.$category.next(category);
  //   if (category !== undefined) {
  //     this.apiService.getSectionArticleList(category).subscribe((data) => {
  //       // console.log(data);



  //    })
  //  }
  }
}
