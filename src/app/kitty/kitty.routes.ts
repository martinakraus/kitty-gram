import { Routes } from '@angular/router';
import { KittyListComponent } from './kitty-list/kitty-list.component';

export const KITTY_ROUTES: Routes = [
  {
    path: '',
    component: KittyListComponent,
  },
];
