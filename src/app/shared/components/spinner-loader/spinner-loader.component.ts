import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractService } from 'src/app/core/api/interact.service';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css'],
})
export class SpinnerLoaderComponent implements OnInit, OnDestroy {
  isLoading!: boolean;
  isLoadingSubscription!: Subscription;
  constructor(private interactService: InteractService) {}

  ngOnInit() {
    this.setIsLoadingFlag();
  }

  setIsLoadingFlag(): void {
    this.isLoadingSubscription = this.interactService.$isLoading.subscribe(
      (flag: boolean) => {
        this.isLoading = flag;
      }
    );
  }

  ngOnDestroy(): void {

    this.isLoadingSubscription.unsubscribe();
  }
}
