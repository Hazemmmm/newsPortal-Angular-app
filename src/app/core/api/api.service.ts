import { ArticleSections } from '../models/ArticleSections.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INYTRespose } from 'src/app/core/models/nyt.response.model';

const API_KEY = environment.NEW_YORK_TIMES_API_KEY;
const APIS: any = {
  home: `${environment.NYTApiUrl}home.json?api-key=${API_KEY}`,

  section: (section: ArticleSections) => {
    if (!section) {
      return '';
    }
    return `${environment.NYTApiUrl}${section.toLowerCase()}.json?api-key=${API_KEY}`;
  },
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLatestNewsList(): Observable<INYTRespose> {
    return this.http.get<INYTRespose>(APIS.home);
  }

  getSectionArticleList(section: ArticleSections): Observable<INYTRespose>{
    return this.http.get<INYTRespose>(APIS.section(section));
  }
}
