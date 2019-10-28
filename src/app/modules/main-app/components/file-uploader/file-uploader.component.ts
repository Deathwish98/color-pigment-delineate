import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SharedService} from '../../../../services/shared.service';
import {CPDFILE} from '../../../../interfaces/cpdfile';
import {FileService} from '../../../../services/file.service';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit, AfterViewInit {

  files: CPDFILE = {
    filesList: [],
    totalFiles: 0,
    uploadedFiles: 0
  };
  @Input() progress;
  @Output() destroyCmp = new EventEmitter();
  @ViewChild('uploaderInput', {static: false}) uploaderInput: ElementRef;

  // @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
  //   this.file = event && event.item(0);
  //   if (!this.file) {
  //     this.onClose();
  //   }
  // }

  testFunc(ev) {
    this.files.totalFiles = ev.target.files.length;
    this.files.uploadedFiles = 0;
    // Take all properties except length
    this.files.filesList = (({length, ...others}) => ({...others}))(ev.target.files);
    console.log(this.files);
    this.uploadFiles();
    // this.onClose();
  }

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.openFileUploader();
  }

  openFileUploader() {
    const el: HTMLInputElement = this.uploaderInput.nativeElement;
    el.click();
  }

  onClose() {
    this.destroyCmp.emit(null);
  }

  uploadFiles() {
    this.fileService.uploadFile(SharedService.toFormData({
      files: this.files.filesList[0]
    })).subscribe((event) => {
      if ( event.type === HttpEventType.UploadProgress ) {
        this.progress = Math.round((100 * event.loaded) / event.total);
      }

      if ( event.type === HttpEventType.Response ) {
        console.log(event.body);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
