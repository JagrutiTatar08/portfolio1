import { Component, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  progress = 0; // px
  fadeOutSplash = false;

  private charDelay = 145; // ms per character

  ngAfterViewInit() {
    this.startTypewriter();
  }

  startTypewriter() {
    const totalChars = this.fullText.length;

    const typeNextChar = () => {
      if (this.currentIndex < totalChars) {
        this.currentIndex++;
        this.displayedText = this.fullText.substring(0, this.currentIndex);

        // Update progress bar width
        const fullWidth = this.getFullTextWidth();
        this.progress = (this.currentIndex / totalChars) * fullWidth;

        setTimeout(typeNextChar, this.charDelay);
      } else {
        // All text typed, ensure progress bar full
        this.progress = this.getFullTextWidth();

        // Start fade out smoothly
        this.fadeOutSplash = true;

        // Notify parent after fade-out duration
        setTimeout(() => this.splashEnded.emit(), 0); // match fade-out CSS
      }
    };

    typeNextChar();
  }

  getFullTextWidth(): number {
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
