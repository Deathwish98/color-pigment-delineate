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

}
