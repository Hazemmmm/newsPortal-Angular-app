import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleCardComponent } from './modules/cards/article-card/article-card.component';
import { NavBarComponent } from './modules/navBar/nav-bar/nav-bar.component';
import { PrimengSharedModule } from './shared/primeng-shared/primeng-shared.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ArticleCardComponent],
  imports: [BrowserModule, AppRoutingModule, PrimengSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
