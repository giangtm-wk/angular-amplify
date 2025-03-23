import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'product',
    loadComponent: () => import('./pages/product/product.component').then(c => c.ProductComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
