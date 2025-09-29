import { OidcConfiguration } from '@axa-fr/oidc-client';

export const authConfig: OidcConfiguration = {
  client_id: '<your-client-id>',
  redirect_uri: `${window.location.origin}/callback`,
  silent_redirect_uri: `${window.location.origin}/callback`,
  scope: 'openid profile email',
  authority: 'your-authorization-server-url',
  // DPoP aktivieren
  demonstrating_proof_of_possession: true,
};
