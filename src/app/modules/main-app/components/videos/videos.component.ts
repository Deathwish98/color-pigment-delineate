import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  player;

  tiles: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
  }
}
