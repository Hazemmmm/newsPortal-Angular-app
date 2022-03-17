import { ApiService } from '../../../../core/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  technologyNewsResult: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getLatestNewsList().subscribe((res) => {
      this.technologyNewsResult = res.articles;
    });
  }
}
