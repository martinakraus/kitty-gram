import { AuthConfig } from '@auth0/auth0-angular';

export const authConfig: AuthConfig = {
  domain: '',
  clientId: '',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: '',
  },
  cacheLocation: 'localstorage',
  useRefreshTokens: true,
};
