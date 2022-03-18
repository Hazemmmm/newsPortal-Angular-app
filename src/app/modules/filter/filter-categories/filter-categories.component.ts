import { ArticleSections } from './../../../core/models/ArticleSections.enum';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { InteractService } from 'src/app/core/api/interact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css'],
})
export class FilterCategoriesComponent implements OnInit, OnDestroy {
  categories!: string[];
  selectedCategory!: any;
  categoriesSubscription!: Subscription;

  constructor(private interactService: InteractService,private apiService: ApiService) {}

  ngOnInit() {
    this.getCategoriesList();
  }
  getCategoriesList(): void {
    this.categoriesSubscription = this.interactService.$cateogires.subscribe(
      (res) => {
        this.categories = res;
      }
    );
  }

  getSelectedCategory(): void {
    // console.log(this.selectedCategory);
  }

  onChange(category: ArticleSections) {
    this.interactService.$category.next(category);

  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
