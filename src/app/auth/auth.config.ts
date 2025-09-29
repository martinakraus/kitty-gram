import { OidcConfiguration } from '@axa-fr/oidc-client';

export const authConfig: OidcConfiguration = {
  client_id: 'dpop-example',
  redirect_uri: `${window.location.origin}/callback`,
  silent_redirect_uri: `${window.location.origin}/callback`,
  scope: 'openid profile email',
  authority: 'http://localhost:8089/auth/realms/heiseDevsec',
  // DPoP aktivieren
  demonstrating_proof_of_possession: true,
};
