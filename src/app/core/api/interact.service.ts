import { IArticle } from 'src/app/core/models/nyt.response.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class InteractService {
  $cateogires = new BehaviorSubject<string[]>(['']);
  $category = new BehaviorSubject<string>('');
  $searchValue = new BehaviorSubject<string>('');
  $articleData = new BehaviorSubject<any>([]);
  $isLoading = new BehaviorSubject<boolean>(true);
  constructor() {}
}
