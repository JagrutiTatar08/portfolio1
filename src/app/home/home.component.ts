import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  skills: string[] = ['Angular', 'Spring Boot', 'MongoDB', 'AWS', 'Docker'];
  displayedSkill = '';
  private skillIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.typeEffect();
    }
  }

  private typeEffect(): void {
    const currentSkill = this.skills[this.skillIndex];
    const fullText = currentSkill;

    this.displayedSkill = this.isDeleting
      ? fullText.substring(0, this.charIndex--)
      : fullText.substring(0, this.charIndex++);

    let speed = this.isDeleting ? 60 : 120;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      this.displayedSkill = fullText; // ensure full word shown
      speed = 1000; // pause before deleting
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.skillIndex = (this.skillIndex + 1) % this.skills.length;
      speed = 300;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

}
