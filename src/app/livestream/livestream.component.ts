import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { VideoPlayerService } from '../services/video-player.service';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss']
})
export class LivestreamComponent implements OnInit, AfterViewInit, OnDestroy {

  private streamUrl: string = 'https://your-live-stream-url.m3u8';

  constructor(private videoPlayerService: VideoPlayerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    this.videoPlayerService.initializePlayer(videoElement, this.streamUrl);
  }

  ngOnDestroy(): void {
    this.videoPlayerService.disposePlayer();
  }
}

