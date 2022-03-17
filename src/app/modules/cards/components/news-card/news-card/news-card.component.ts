import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  latestNewsResult!: IArticle[];
  pageSize = 12;
  page = 1;
  totalCount!: number;
  size = 5;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.apiService.getLatestNewsList().subscribe((data) => {
      console.log(data);

      this.latestNewsResult = data.results;
      this.totalCount = data.results.length;
    });
  }
}
