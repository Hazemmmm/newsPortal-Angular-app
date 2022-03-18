import { InteractService } from './../../../../../core/api/interact.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';
import { IArticle } from 'src/app/core/models/nyt.response.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit, OnDestroy {
  nytAltImg =
    'https://mpng.subpng.com/20180606/cea/kisspng-the-new-york-times-company-new-york-city-news-jour-new-york-icons-5b187238ae78d0.6794013715283287607146.jpg';

  latestNewsSubscription!: Subscription;
  filteredSubscription!: Subscription;
  searchSubscription!: Subscription;
  isLoading  = true;
  latestNewsResult: IArticle[] = [];
  pageSize = 12;
  page = 1;
  totalCount!: number;
  size = 5;
  filterCategoryName!: string;
  searchValue!: string;
  constructor(
    private apiService: ApiService,
    private interactService: InteractService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNews();
    this.filterCategory();
    this.searchArticle();
  }

  getNews(): void {
    this.latestNewsSubscription = this.apiService
      .getLatestNewsList()
      .subscribe((data) => {
        if (data.results.length > 0) {
         this.isLoading = false;
          this.latestNewsResult = data.results;
          this.totalCount = data.results.length;

          this.interactService.$cateogires.next([
            ...new Set(data.results.map((x) => x.section)),
          ]);
        }
      });
  }

  filterCategory(): void {
    this.filteredSubscription = this.interactService.$category.subscribe(
      (res) => {
        if (res !== null) {
          this.filterCategoryName = res;
        } else {
          this.interactService.$category.next('');
        }
      }
    );
  }

  searchArticle(): void {
    this.searchSubscription = this.interactService.$searchValue.subscribe(
      (res) => {
        this.searchValue = res;
      }
    );
  }
  onClickaArticle(article: IArticle): void {
    this.router.navigate(['article']);
    this.interactService.$articleData.next(article);
  }

  ngOnDestroy(): void {
    this.latestNewsSubscription.unsubscribe();
    this.filteredSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }
}
