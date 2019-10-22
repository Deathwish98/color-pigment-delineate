import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(formValue) {
    return this.http.post(`${environment.CPDSERVER}/api/users/login`, formValue);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  setSession(authResult) {
    localStorage.setItem('id_token', authResult.token);
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      return true;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
  //
  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   console.log(expiresAt);
  //   return moment(expiresAt);
  // }
}
