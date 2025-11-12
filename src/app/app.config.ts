import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideClientHydration } from '@angular/platform-browser';

import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),   // 👈 registers Angular Router
    provideClientHydration(),
    provideNoopAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
