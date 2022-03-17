import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { IArticle } from 'src/app/core/models/nyt.response.model';


export interface BlogPostCard {
  mainImageUrl: string;
  category: string;
  title: string;
  description: string;
  postDate: string;
  authorImageUrl: string;
  authorName: string;
}
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent implements OnInit {
  latestNewsResult!: IArticle[];
  data!: BlogPostCard;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.apiService.getLatestNewsList().subscribe((data) => {
      console.log(data);

      this.latestNewsResult = data.results;
      // this.setCardData(this.latestNewsResult);
    });
  }

  // setCardData(data: IArticle[]): void {
  //   console.log(data);

  //   if (data.length > 0) {
  //     data?.forEach((article) => {
  //       this.mainHeader = article.title;
  //     });
  //   } else {
  //     // handle page loader
  //   }
  // }
}
