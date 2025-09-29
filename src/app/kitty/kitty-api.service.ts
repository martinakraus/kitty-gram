import { inject, Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Kitty } from './models/model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class KittyApiService {
  private readonly apiUrl = 'http://localhost:3000/api/kitties';
  private readonly authService = inject(AuthService);

  getAll(filter?: { query: string }): Observable<Kitty[]> {
    const oidcClient = this.authService.getOidcClient();
    const accessToken = this.authService.getAccessToken();
    const url = filter?.query
      ? `${this.apiUrl}?query=${encodeURIComponent(filter.query)}`
      : this.apiUrl;

    // If not authenticated, use regular fetch
    if (!accessToken) {
      return from(fetch(url).then((response) => response.json()));
    }

    // Use fetchWithTokens for authenticated requests with DPoP
    const fetchWithDPoP = oidcClient.fetchWithTokens(fetch, true);

    return from(
      fetchWithDPoP(url, {
        headers: {
          Authorization: `DPoP ${accessToken}`,
        },
      }).then((response) => response.json())
    );
  }
}
