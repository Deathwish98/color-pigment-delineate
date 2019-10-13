import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formValue) {
    return this.http.post(`${environment.CPDSERVER}/api/users/login`, formValue);
  }
}
