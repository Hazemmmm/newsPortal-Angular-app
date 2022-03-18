import { Component, OnInit } from '@angular/core';
import { InteractService } from 'src/app/core/api/interact.service';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css'],
})
export class SpinnerLoaderComponent implements OnInit {
  isLoading!: boolean;

  constructor(private interactService: InteractService) {}

  ngOnInit() {
    this.interactService.$isLoading.subscribe((flag: boolean) => {
      this.isLoading = flag;
    })
  }
}
