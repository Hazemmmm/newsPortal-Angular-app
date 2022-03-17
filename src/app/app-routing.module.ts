import { TechCardComponent } from './modules/cards/components/tech-card/tech-card/tech-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component:  },
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
