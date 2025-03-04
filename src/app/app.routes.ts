import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'kitties',
    canActivate: [authGuardFn],
    loadChildren: () =>
      import('./kitty/kitty.routes').then((m) => m.KITTY_ROUTES),
  },
];
