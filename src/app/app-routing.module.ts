import { TechCardComponent } from './modules/cards/components/tech-card/tech-card/tech-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './modules/cards/components/news-card/news-card/news-card.component';
import { ArticleCardComponent } from './modules/cards/components/article-card/article-card.component';


const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsCardComponent },
  { path: 'tech', component: TechCardComponent },
  // { path: 'search', component: ArticleCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
