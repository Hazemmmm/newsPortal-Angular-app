import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
  ],
  exports: [MenubarModule, InputTextModule, TabViewModule, ButtonModule],
})
export class PrimengSharedModule {}
