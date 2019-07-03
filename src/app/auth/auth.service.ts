import { Injectable } from '@angular/core';
import {UserManager, UserManagerSettings, User, WebStorageStateStore} from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
      });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  login(): Promise<void> {
    return this.manager.signinRedirect();
  }

  logout(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'https://dev-214009.okta.com',
    client_id: '0oamy7heoa4aJ98ks356',
    // redirect_uri: 'http://localhost:4200/auth/auth-callback',
    redirect_uri: 'http://localhost:4200/assets/oidc-login-redirect.html',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'id_token token',
    scope: 'openid profile',
    filterProtocolClaims: true,
    loadUserInfo: true,
    userStore: new WebStorageStateStore({store: window.localStorage})
  };
}
