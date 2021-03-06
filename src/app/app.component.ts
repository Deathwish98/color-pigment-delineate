import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-pigment-delineate';

  sideNavItems = [
    {
      label: 'Home',
      icon: 'home'
    },
    {
      label: 'Videos',
      icon: 'videocam',
      additional_icon: 'add_circle'
    }
  ];

}
