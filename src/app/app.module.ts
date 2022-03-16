import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleCardComponent } from './modules/cards/components/article-card/article-card.component';
import { HeadlineCardComponent } from './modules/cards/components/headlines-card/headline-card/headline-card.component';
import { NavBarComponent } from './modules/navBar/nav-bar/nav-bar.component';
import { PrimengSharedModule } from './shared/primeng-shared/primeng-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialSharedModule } from './shared/angular-material-shared/angular-material-shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './modules/cards/components/news-card/news-card/news-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleCardComponent,
    HeadlineCardComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialSharedModule,
    PrimengSharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
