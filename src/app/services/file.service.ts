import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(formData) {
    return this.http.post(`${environment.CPDSERVER}/api/videos/new`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
