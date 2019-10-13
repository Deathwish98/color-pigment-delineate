import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent {
  title = 'color-pigment-delineate';

  sideNavItems = [
    {
      label: 'Home',
      icon: 'home',
      link: ''
    },
    {
      label: 'Videos',
      icon: 'videocam',
      link: '/videos',
      additional_icon: 'add_circle'
    }
  ];

}
