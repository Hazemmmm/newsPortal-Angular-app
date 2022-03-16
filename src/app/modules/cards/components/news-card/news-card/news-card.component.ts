import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/services/api.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  newsList: any[] =[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getLatestNewsList().subscribe((res) => {
      this.newsList = res.results;
      console.log(this.newsList);


    })
  }

}
