import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';

@NgModule({
  imports: [CommonModule, MenubarModule],
  exports: [MenubarModule],
})
export class PrimengSharedModule {}
