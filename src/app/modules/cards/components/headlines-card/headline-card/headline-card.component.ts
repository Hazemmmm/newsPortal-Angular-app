import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline-card',
  templateUrl: './headline-card.component.html',
  styleUrls: ['./headline-card.component.css'],
})
export class HeadlineCardComponent implements OnInit {
  text!: string;

  results: string[] = [];
  constructor() {}

  ngOnInit() { }

  search(event: any) {
    
    // this.mylookupservice.getResults(event.query).then((data) => {
    //   this.results = data;
    // });
  }
}
