import { Injectable } from '@angular/core';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  private player: Player | null = null;

  constructor() { }

  initializePlayer(videoElement: HTMLVideoElement, streamUrl: string): void {
    if (this.player) {
      this.player.dispose();
    }

    // Ensure that the video element is valid before initializing the player
    if (videoElement) {
      this.player = videojs(videoElement, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        sources: [{
          src: streamUrl,
          type: 'application/x-mpegURL'
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
      this.player = null;  // Reset the player to null after disposing
    }
  }
}
