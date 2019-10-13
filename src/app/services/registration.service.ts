import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(formValue) {
    return this.http.post(`${environment.CPDSERVER}/api/users/new`, formValue);
  }
}
