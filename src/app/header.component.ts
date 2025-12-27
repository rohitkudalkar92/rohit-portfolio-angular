import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-glass-border">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black text-sm md:text-base">
            R
          </div>
          <div>
            <div class="text-base md:text-lg font-semibold">{{ brandName }}</div>
            <div class="text-xs opacity-70 hidden sm:block">{{ brandSubtitle }}</div>
          </div>
        </div>
        
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a [routerLink]="routes.HOME" class="hover:underline transition-all">{{ nav.HOME }}</a>
            <a [routerLink]="routes.SKILLS" class="hover:underline transition-all">{{ nav.SKILLS }}</a>
            <a [routerLink]="routes.PROJECTS" class="hover:underline transition-all">{{ nav.PROJECTS }}</a>
            <a [routerLink]="routes.DSA" class="hover:underline transition-all">{{ nav.DSA }}</a>
            <a [routerLink]="routes.TIMELINE" class="hover:underline transition-all">{{ nav.EXPERIENCE }}</a>
          </nav>
          
          <!-- Theme Toggle -->
          <button (click)="toggleTheme()" class="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
              {{ isDark ? '☀️' : '🌙' }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-all">
            <div class="w-5 h-5 flex flex-col justify-center items-center">
              <span class="block w-4 h-0.5 bg-current transition-all duration-300" [class.rotate-45]="isMobileMenuOpen" [class.translate-y-1]="isMobileMenuOpen"></span>
              <span class="block w-4 h-0.5 bg-current mt-1 transition-all duration-300" [class.opacity-0]="isMobileMenuOpen"></span>
              <span class="block w-4 h-0.5 bg-current mt-1 transition-all duration-300" [class.-rotate-45]="isMobileMenuOpen" [class.-translate-y-1]="isMobileMenuOpen"></span>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <nav class="md:hidden overflow-hidden transition-all duration-300" [class.max-h-0]="!isMobileMenuOpen" [class.max-h-64]="isMobileMenuOpen">
        <div class="px-4 py-2 space-y-2 border-t border-glass-border bg-glass-bg">
          <a [routerLink]="routes.HOME" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-all text-sm">{{ nav.HOME }}</a>
          <a [routerLink]="routes.SKILLS" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-all text-sm">{{ nav.SKILLS }}</a>
          <a [routerLink]="routes.PROJECTS" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-all text-sm">{{ nav.PROJECTS }}</a>
          <a [routerLink]="routes.DSA" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-all text-sm">{{ nav.DSA }}</a>
          <a [routerLink]="routes.TIMELINE" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-all text-sm">{{ nav.EXPERIENCE }}</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  isDark = false;
  isMobileMenuOpen = false;
  brandName = CONSTANTS.BRAND_NAME;
  brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  nav = CONSTANTS.NAV;
  routes = CONSTANTS.ROUTES;

  ngOnInit() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme() {
    // Create smooth fade effect
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      this.isDark = !this.isDark;
      this.applyTheme();
      sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
      
      // Fade back in
      setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
      }, 100);
    }, 150);
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}