import { AsyncPipe, DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly doc = inject(DOCUMENT);
  isAuthenticated$: Observable<boolean> =
    this.authService.isAuthenticated$.pipe(
      tap((isAuthenticated) => console.log('isAuthenticated', isAuthenticated))
    );

  login() {
    this.authService.loginWithRedirect();
  }

  logout() {
    this.authService.logout({
      logoutParams: { returnTo: this.doc.location.origin },
    });
  }
}
