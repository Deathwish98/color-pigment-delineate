import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private router: Router) {
    router.events.subscribe((val) => {
      console.log(val);
    });

    this.currentRouteSubject.subscribe((route) => {
      this.currentRoute = route;
    });
  }

  public currentRouteSubject = new Subject<string>();
  public currentRoute: string;

  public static toFormData<T>( formValue: T ) {
    console.log(formValue);
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value, value.name);
    }

    // new Response(formData).text().then(console.log);
    return formData;
  }

}
