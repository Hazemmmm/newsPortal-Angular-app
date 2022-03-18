import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractService } from 'src/app/core/api/interact.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css'],
})
export class HeaderToolbarComponent implements OnInit {
  text!: string;
  searchString: string = '';
  results: string[] = [];

  constructor(private interactService: InteractService) {}

  ngOnInit() {}

  onSearchChange(searchValue: any): void {
    this.interactService.$searchValue.next(searchValue.target.value);
  }
}
