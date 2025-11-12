import { Component, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements AfterViewInit {
  @Output() splashEnded = new EventEmitter<void>();
  @ViewChild('welcomeText', { static: true }) welcomeText!: ElementRef<HTMLHeadingElement>;

  fullText = 'Welcome to My Portfolio';
  displayedText = '';
  currentIndex = 0;
  progress = 0;
  fadeOutSplash = false;

  private charDelay = 120;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.startTypewriter();
    }
  }

  startTypewriter() {
    const totalChars = this.fullText.length;
    const typeNextChar = () => {
      if (this.currentIndex < totalChars) {
        this.currentIndex++;
        this.displayedText = this.fullText.substring(0, this.currentIndex);
        this.progress = (this.currentIndex / totalChars) * this.getFullTextWidth();
        setTimeout(typeNextChar, this.charDelay);
      } else {
        this.progress = this.getFullTextWidth();
        this.fadeOutSplash = true;
        setTimeout(() => this.splashEnded.emit(), 1000);
      }
    };
    typeNextChar();
  }

  getFullTextWidth(): number {
    if (!this.isBrowser) return 200;
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.font = getComputedStyle(this.welcomeText.nativeElement).font;
    span.innerText = this.fullText;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  }
}
