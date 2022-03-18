import { InteractService } from './../../../../../core/api/interact.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api/api.service';
import { IArticle } from 'src/app/core/models/nyt.response.model';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  nytAltImg =
    'https://mpng.subpng.com/20180606/cea/kisspng-the-new-york-times-company-new-york-city-news-jour-new-york-icons-5b187238ae78d0.6794013715283287607146.jpg';
  latestNewsResult: IArticle[] = [];
  pageSize = 12;
  page = 1;
  totalCount!: number;
  size = 5;
  filterCategoryName!: string;
  constructor(
    private apiService: ApiService,
    private interactService: InteractService
  ) {}

  ngOnInit() {
    this.getNews();
    this.filterCategory();


  }

  getNews(): void {
    this.apiService.getLatestNewsList().subscribe(

      (data) => {
        if (data.results.length > 0) {
          this.latestNewsResult = data.results;
          this.totalCount = data.results.length;

          this.interactService.$cateogires.next([
            ...new Set(data.results.map((x) => x.section)),
          ]);
        }
      });
  }

  filterCategory(): void {
    this.interactService.$category.subscribe((res) => {
      if (res !== null) {
        this.filterCategoryName = res;
      }
      else {
        this.interactService.$category.next('');
      }
    });
  }
}
