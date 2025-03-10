import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hydrate',
  standalone: true,
  imports: [],
  templateUrl: './hydrate.component.html',
  styleUrl: './hydrate.component.scss',
})
export class HydrateComponent {
  // esto me dice si estoy en el browser o no (en el caso de estar usando SSR)
  isBrowser: boolean = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    // Validamos si ya está en browser antes de usar el localstorage
    if (this.isBrowser) localStorage.setItem('key', 'test');
  }
}
