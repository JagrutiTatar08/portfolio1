import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
// import bootstrap from '../../main.server';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isHidden = false;
  lastScrollTop = 0;
  scrollProgress = 0;
  isScrolling = false;
  private scrollTimeout: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  closeNavbar() {
    const navbar = this.el.nativeElement.querySelector('#navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Scroll progress calculation
    this.scrollProgress = (currentScroll / totalHeight) * 100;

    // Show vertical bar while scrolling
    this.isScrolling = true;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 800); // fade out after 0.8s of no scrolling

    // Hide navbar when scrolling down
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Add shadow when scrolled
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
  }
}
