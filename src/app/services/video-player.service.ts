import { Injectable } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  private player: Player | null = null;

  constructor() { }

  initializePlayer(videoElement: any, streamUrl: string): void {
    if (this.player) {
      this.player.dispose();
    }

    if (videoElement) {
      this.player = videojs(videoElement, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        sources: [{
          src: streamUrl,
          type: 'application/x-mpegURL' // m3u8 format
        }]
      });

      this.player.on('error', (error: any) => {
        console.error('Video.js error:', error);
      });

      this.player.on('ready', () => {
        console.log('Video.js player is ready');
      });
    } else {
      console.error('Invalid video element provided for Video.js initialization');
    }
  }

  disposePlayer(): void {
    if (this.player) {
      this.player.dispose();
      this.player = null;
    }
  }
}
