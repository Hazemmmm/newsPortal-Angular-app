import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InteractService } from 'src/app/core/api/interact.service';
import { IArticle } from 'src/app/core/models/nyt.response.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit, OnDestroy {
  nytAltImg =
    'https://mpng.subpng.com/20180606/cea/kisspng-the-new-york-times-company-new-york-city-news-jour-new-york-icons-5b187238ae78d0.6794013715283287607146.jpg';

  private articleDataSubscription!: Subscription;
  technologyNewsResult: any;
  articleData!: IArticle;
  constructor(private interactService: InteractService, private router: Router) {}

  ngOnInit() {
    this.getArticleData();
  }
  getArticleData(): void {
    this.interactService.$isLoading.next(true);
    this.articleDataSubscription = this.interactService.$articleData.subscribe(
      (res) => {
        if (res.length === 0) {
          // handle when refreshing the page route[/article]
          this.router.navigate(['news']);
        }
        else {
          this.articleData = res;
          this.interactService.$isLoading.next(false);
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.articleDataSubscription.unsubscribe();
  }
}
