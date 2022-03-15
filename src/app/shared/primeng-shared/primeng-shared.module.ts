import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
  ],
})
export class PrimengSharedModule {}
