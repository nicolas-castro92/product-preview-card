import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'card',
    loadComponent : () => import('./card/components/card-item/card-item').then((c)=>c.CardItem)
  },
  {
    path:'**',
    redirectTo:'card'
  }
];
