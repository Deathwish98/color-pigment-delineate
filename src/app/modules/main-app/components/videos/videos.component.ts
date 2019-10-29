import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import * as Plyr from 'plyr';
import {FileUploaderComponent} from '../file-uploader/file-uploader.component';
import {FileService} from '../../../../services/file.service';
import {MatDialog} from '@angular/material';
import {VideosListModalComponent} from '../videos-list-modal/videos-list-modal.component';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnDestroy {

  @ViewChild('fileUploaderContainer', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;

  fileUploaderSubscription;
  player;
  animal: string;
  name: string;

  tiles: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

  constructor(
    private resolver: ComponentFactoryResolver,
    private fileService: FileService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
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
      });

    }, (err) => {
      console.log(err);
    });
  }

}
