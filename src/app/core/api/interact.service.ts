import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class InteractService {
  $cateogires = new BehaviorSubject<string[]>(['']);
  $category = new BehaviorSubject<string>('');

  constructor(private apiService: ApiService) {}
}