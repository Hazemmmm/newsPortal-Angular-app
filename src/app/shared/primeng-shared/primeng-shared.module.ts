import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
    CardModule,
    DividerModule,
    DropdownModule,
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
    CardModule,
    DividerModule,
    DropdownModule,
  ],
})
export class PrimengSharedModule {}
