import { Component } from '@angular/core';
import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  constructor(private auth: AuthService) {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getClaims() {
    console.log(this.auth.getClaims());
  }
}
