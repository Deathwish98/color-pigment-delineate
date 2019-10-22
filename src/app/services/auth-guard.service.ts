import { Injectable } from '@angular/core';
import {Router, CanLoad} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router,
              private loginService: LoginService) { }

  canLoad() {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
