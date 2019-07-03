import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  async canActivate() {
    if (await this.authService.isLoggedIn()) {
      return true;
    }

    await this.authService.login();
    return false;
  }
}
