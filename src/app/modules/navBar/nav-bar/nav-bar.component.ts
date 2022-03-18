import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentTabIndex: number = 0;
  navLinks = [
    { label: 'News', path: 'news' },
    { label: 'Tech', path: 'tech' }
  ];
  activeLink = this.navLinks[0];
  background: ThemePalette = undefined;
  constructor() {}

  ngOnInit() {}
}
