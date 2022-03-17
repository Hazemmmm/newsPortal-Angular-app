import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './modules/navBar/nav-bar/nav-bar.component';
import { PrimengSharedModule } from './shared/primeng-shared/primeng-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialSharedModule } from './shared/angular-material-shared/angular-material-shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './modules/cards/components/news-card/news-card/news-card.component';
import { HeaderToolbarComponent } from './modules/cards/components/header/header-toolbar/header-toolbar.component';
import { ArticleCardComponent } from './modules/cards/components/article-card/article-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    NavBarComponent,
    ArticleCardComponent,
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
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
