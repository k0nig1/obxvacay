import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for common directives
import { VideoPlayerService } from '../services/video-player.service';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule],  // Include CommonModule or other needed modules
})
export class LivestreamComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('streamhoster', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;

  private streamUrl: string = 'https://c.streamhoster.com/link/hls/WBs3lk/i2LT4nJscCY/iXF1Nbsfwi9_5/playlist.m3u8';

  constructor(private videoPlayerService: VideoPlayerService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoPlayerService.initializePlayer(this.videoElement.nativeElement, this.streamUrl);
    }
  }

  ngOnDestroy(): void {
    this.videoPlayerService.disposePlayer();
  }
}
