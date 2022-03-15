import { TechCardComponent } from './modules/cards/components/tech-card/tech-card/tech-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineCardComponent } from './modules/cards/components/headlines-card/headline-card/headline-card.component';

const routes: Routes = [
  { path: '', component: HeadlineCardComponent },
  {
    path: 'technology',
    component: TechCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
