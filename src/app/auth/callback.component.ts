import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// callback.component.ts
@Component({
  selector: 'app-callback',
  template: '<p>Login wird verarbeitet...</p>',
})
export class CallbackComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);

  async ngOnInit() {
    try {
      const oidcClient = this.authService.getOidcClient();

      await oidcClient.loginCallbackAsync();
      console.log('Login successful, tokens stored');

      // Aktualisiere den Authentication-Status
      await this.authService.checkAndUpdateAuthStatus();

      await this.router.navigate(['/']);
    } catch (error) {
      console.error('Login callback error:', error);
      // Bei Fehler zur Login-Seite zurück
      await this.router.navigate(['/login']);
    }
  }
}
