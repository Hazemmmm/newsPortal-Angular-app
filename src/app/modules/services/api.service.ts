import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc9cde092b574fc7af802c25dd61ce60';
  technologyNews(): Observable<any> {
    return this.http.get(this.techNewsApiUrl);
  }
}
