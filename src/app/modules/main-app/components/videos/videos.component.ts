import {AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import * as Plyr from 'plyr';
import {FileUploaderComponent} from '../file-uploader/file-uploader.component';
import {FileService} from '../../../../services/file.service';
import {MatDialog} from '@angular/material';
import {VideosListModalComponent} from '../videos-list-modal/videos-list-modal.component';
import {FormControl} from '@angular/forms';
import {SharedService} from '../../../../services/shared.service';
import {ModifiedVideoPlayerModalComponent} from '../modified-video-player-modal/modified-video-player-modal.component';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnDestroy {

  @ViewChild('fileUploaderContainer', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  blindnessControl = new FormControl();
  fileUploaderSubscription;
  player;
  video;
  videoSrc;

  blindnessGroups = [
    {
      name: 'Protan',
      types: [
        {value: 'protan-0', viewValue: 'Mild Protan'},
        {value: 'protan-1', viewValue: 'Moderate Protan'},
        {value: 'protan-2', viewValue: 'Strong Protan'}
      ]
    },
    {
      name: 'Deutan',
      types: [
        {value: 'deutan-0', viewValue: 'Mild Deutan'},
        {value: 'deutan-1', viewValue: 'Moderate Deutan'},
        {value: 'deutan-2', viewValue: 'Strong Deutan'}
      ]
    },
    // {
    //   name: 'Fire',
    //   disabled: true,
    //   pokemon: [
    //     {value: 'charmander-6', viewValue: 'Charmander'},
    //     {value: 'vulpix-7', viewValue: 'Vulpix'},
    //     {value: 'flareon-8', viewValue: 'Flareon'}
    //   ]
    // },
    {
      name: 'Tritan',
      types: [
        {value: 'tritan-0', viewValue: 'Tritan'}
      ]
    }
    ];

  tiles: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

  constructor(
    private resolver: ComponentFactoryResolver,
    private fileService: FileService,
    public dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
    this.sharedService.uploadFileActionSubject$.subscribe(() => {
      this.createUploaderComponent();
    });
  }

  createUploaderComponent() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(FileUploaderComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.progress = 0;
    this.fileUploaderSubscription = componentRef.instance.destroyCmp.subscribe((value) => {
      console.log('Child Destroyed', value);
      componentRef.destroy();
    });
    componentRef.location.nativeElement.style = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    -webkit-box-shadow: 2px 4px 10px 2px rgba(129,112,186,1);
    -moz-box-shadow: 2px 4px 10px 2px rgba(129,112,186,1);
    box-shadow: 2px 4px 10px 2px rgba(129,112,186,1);
    padding: 16px;
    background-color: gray;
  `;
  }

  ngOnDestroy() {
    if (this.fileUploaderSubscription) {
      this.fileUploaderSubscription.unsubscribe();
    }
  }

  getFilesList() {
    this.fileService.getFilesList().subscribe((response) => {
      console.log(response);
      const dialogRef = this.dialog.open(VideosListModalComponent, {
        width: '75%',
        height: '75%',
        data: {videos: response.videos}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if (result) {
          this.video = result;
          this.videoSrc = `http://localhost:3000/api/videos/?id=${this.video._id}`;
        }
      });

    }, (err) => {
      console.log(err);
    });
  }

  getRequestedVideo() {
    const dialogRef = this.dialog.open(ModifiedVideoPlayerModalComponent,{
      width: '75%',
      height: '75%',
      data: {
        blindnessType: this.blindnessControl.value,
        id: this.video._id
      }
    });
    console.log(this.blindnessControl.value);
  }

}
