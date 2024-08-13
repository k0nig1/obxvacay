import { Component, OnInit, OnDestroy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerService } from '../services/video-player.service';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LivestreamComponent implements OnInit, AfterViewInit, OnDestroy {
  private streamUrl: string = 'https://c.streamhoster.com/link/hls/WBs3lk/i2LT4nJscCY/iXF1Nbsfwi9_5/playlist.m3u8';

  constructor(private videoPlayerService: VideoPlayerService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const videoElement = document.getElementById('streamhoster') as any;
    this.videoPlayerService.initializePlayer(videoElement, this.streamUrl);
  }

  ngOnDestroy(): void {
    this.videoPlayerService.disposePlayer();
  }
}
