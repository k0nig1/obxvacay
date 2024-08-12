import { Injectable } from '@angular/core';
import videojs from 'video.js';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  private player: videojs.Player | null = null;

  constructor() { }

  initializePlayer(videoElement: HTMLVideoElement, streamUrl: string): void {
    if (this.player) {
      this.player.dispose();
    }

    this.player = videojs(videoElement, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      sources: [{
        src: streamUrl,
        type: 'application/x-mpegURL'
      }]
    });

    this.player.on('error', (error) => {
      console.error('Video.js error:', error);
    });

    this.player.on('ready', () => {
      console.log('Video.js player is ready');
    });
  }

  disposePlayer(): void {
    if (this.player) {
      this.player.dispose();
      this.player = null;
    }
  }
}
