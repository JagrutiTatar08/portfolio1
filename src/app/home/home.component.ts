import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,TagModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles: string[] = ['Frontend Developer', 'Angular Enthusiast', 'UI/UX Designer', 'Software Engineer'];
  currentRoleIndex = 0;
  typingText = '';
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // ✅ Run only in browser, skip in SSR
    if (this.isBrowser) {
      this.startTyping();
    } else {
      // Render static fallback for SEO
      this.typingText = this.roles[0];
    }
  }

  startTyping() {
    let role = this.roles[this.currentRoleIndex];
    let i = 0;
    const type = () => {
      if (i < role.length) {
        this.typingText += role.charAt(i);
        i++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => this.startDeleting(), 1500);
      }
    };
    type();
  }

  startDeleting() {
    let role = this.roles[this.currentRoleIndex];
    let i = role.length - 1;
    const del = () => {
      if (i >= 0) {
        this.typingText = this.typingText.substring(0, i);
        i--;
        setTimeout(del, 50);
      } else {
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        setTimeout(() => this.startTyping(), 500);
      }
    };
    del();
  }
}
