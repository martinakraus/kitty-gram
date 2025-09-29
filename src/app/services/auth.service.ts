import { Injectable } from '@angular/core';
import { OidcClient } from '@axa-fr/oidc-client';
import { authConfig } from '../auth/auth.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly oidcClient: OidcClient;
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor() {
    this.oidcClient = OidcClient.getOrCreate(() => fetch)(authConfig);
    this.loadTokens();
  }

  getOidcClient(): OidcClient {
    return this.oidcClient;
  }

  async login() {
    await this.oidcClient.loginAsync();
    this.isAuthenticated.next(true);
  }

  async logout() {
    await this.oidcClient.logoutAsync();
    this.isAuthenticated.next(false);
  }

  getAccessToken(): string | null {
    const tokens = this.oidcClient.tokens;
    return tokens?.accessToken || null;
  }

  async getUserInfo() {
    return await this.oidcClient.userInfoAsync();
  }

  private async loadTokens() {
    try {
      await this.oidcClient.tryKeepExistingSessionAsync();
      console.log('Tokens loaded:', this.oidcClient.tokens);
      this.isAuthenticated.next(this.oidcClient.tokens !== null);
    } catch (error) {
      console.error('Error loading tokens:', error);
      this.isAuthenticated.next(false);
    }
  }

  async checkAndUpdateAuthStatus() {
    await this.loadTokens();
  }
}
