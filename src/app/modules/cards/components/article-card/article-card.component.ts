import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractService } from 'src/app/core/api/interact.service';

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
  articleData: any;
  constructor(private interactService: InteractService) {}

  ngOnInit() {
    this.getArticleData();
  }
  getArticleData(): void {
    this.articleDataSubscription = this.interactService.$articleData.subscribe(
      (res) => {
        this.articleData = res;
        console.log(this.articleData);

      }
    );
  }

  ngOnDestroy(): void {
    this.articleDataSubscription.unsubscribe();
  }
}
