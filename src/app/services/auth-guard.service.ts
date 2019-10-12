import { Injectable } from '@angular/core';
import {Router, CanLoad} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad() {
    return true;
  }
}
