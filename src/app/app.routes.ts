import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map',
  },
  {
    path: 'map',
    loadComponent: () =>
      import('./world-map/world-map.component').then((m) => m.WorldMapComponent),
  },
];
