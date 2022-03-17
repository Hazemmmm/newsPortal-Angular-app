import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent implements OnInit {
  text!: string;

  results: string[] = [];
  constructor() {}

  ngOnInit() {}
  search(event: any) {
    // this.mylookupservice.getResults(event.query).then((data) => {
    //   this.results = data;
    // });
  }
}
