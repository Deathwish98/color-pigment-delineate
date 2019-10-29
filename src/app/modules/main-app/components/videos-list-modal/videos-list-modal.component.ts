import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {VIDEOLISTMODALDATA} from '../../../../interfaces/video-list-modal-data';

@Component({
  selector: 'app-videos-list-modal',
  templateUrl: './videos-list-modal.component.html',
  styleUrls: ['./videos-list-modal.component.scss']
})
export class VideosListModalComponent implements OnInit {

  selectedVideo;

  constructor(
    public dialogRef: MatDialogRef<VideosListModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VIDEOLISTMODALDATA) {
    console.log(this.data);
  }

  ngOnInit() {
  }

  selectImage(image) {
    this.data.videos.forEach((video) => {
      video.selected = video._id === image._id;
      this.selectedVideo = video;
    });
    console.log(this.data);
  }

  playVideo() {
    this.dialogRef.close(this.selectedVideo);
  }
}
