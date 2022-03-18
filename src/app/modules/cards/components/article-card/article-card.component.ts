import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractService } from 'src/app/core/api/interact.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit, OnDestroy {
  private articleDataSubscription!: Subscription;
  technologyNewsResult: any;
  constructor(private interactService: InteractService) {}

  ngOnInit() {
    this.getArticleData();
  }
  getArticleData(): void {
    this.articleDataSubscription = this.interactService.$articleData.subscribe(
      (articleData) => {
        console.log(articleData);
      }
    );
  }

  ngOnDestroy(): void {
    this.articleDataSubscription.unsubscribe();
  }
}
