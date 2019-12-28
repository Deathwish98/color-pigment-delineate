import {Component, Inject, OnInit} from '@angular/core';
import * as Plyr from 'plyr';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MODIFIEDPLAYERDATA} from '../../../../interfaces/modified-player-data';

@Component({
  selector: 'app-modified-video-player-modal',
  templateUrl: './modified-video-player-modal.component.html',
  styleUrls: ['./modified-video-player-modal.component.scss']
})
export class ModifiedVideoPlayerModalComponent implements OnInit {

  player;
  videoSrc;

  constructor(
    public dialogRef: MatDialogRef<ModifiedVideoPlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MODIFIEDPLAYERDATA) {
    this.videoSrc = `http://localhost:3000/api/videos/?id=${this.data.id}&type=${this.data.blindnessType}`;
    console.log(this.data);
  }

  ngOnInit() {
    this.player = new Plyr('#plyrID1', { captions: { active: true } });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }



}
