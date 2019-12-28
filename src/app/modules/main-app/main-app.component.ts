import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent {


  constructor(private sharedService: SharedService) {
  }

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

  triggerUploadFileAction() {
    this.sharedService.uploadFileActionSubject$.next();
  }

}
