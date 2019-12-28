import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val);
        this.currentRouteSubject$.next(val.urlAfterRedirects);
      }
    });

    this.currentRouteSubject$.subscribe((route) => {
      this.currentRoute = route;
    });
  }

  public currentRouteSubject$ = new Subject<string>();
  public currentRoute: string;
  public uploadFileActionSubject$ = new Subject<any>();

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
