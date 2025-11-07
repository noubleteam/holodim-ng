import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: Theme = 'light';
  private readonly storageKey = 'theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;

    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem(this.storageKey, theme);

    if (theme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }

  getTheme() {
    return this.currentTheme;
  }
}
