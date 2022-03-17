import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule,MatTabsModule, MatToolbarModule, MatIconModule, MatButtonModule,MatTabsModule],
  exports: [MatToolbarModule,MatTabsModule, MatIconModule, MatButtonModule],
})
export class AngularMaterialSharedModule {}
