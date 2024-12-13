import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authConfig } from './auth/auth.config';
import {
  AbstractSecurityStorage,
  DefaultLocalStorageService,
  provideAuth,
} from 'angular-auth-oidc-client';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideAuth(authConfig),
    /*{
      provide: AbstractSecurityStorage,
      useClass: DefaultLocalStorageService,
    },*/
  ],
};
