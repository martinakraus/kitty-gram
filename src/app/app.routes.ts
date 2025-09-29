import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CallbackComponent } from './auth/callback.component';

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
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'kitties',
    loadChildren: () =>
      import('./kitty/kitty.routes').then((m) => m.KITTY_ROUTES),
  },
];
