import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-glass-border">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <a routerLink="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black text-sm md:text-base">
              R
            </div>
            <div>
              <div class="text-base md:text-lg font-semibold">{{ brandName }}</div>
              <div class="text-xs opacity-70 hidden sm:block">{{ brandSubtitle }}</div>
            </div>
          </a>
        </div>
        
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a routerLink="/" class="hover:underline transition-all">{{ nav.HOME }}</a>
            <a routerLink="/skills" class="hover:underline transition-all">{{ nav.SKILLS }}</a>
            <a routerLink="/projects" class="hover:underline transition-all">{{ nav.PROJECTS }}</a>
            <a routerLink="/diagram" class="hover:underline transition-all">Diagram</a>
            <a routerLink="/dsa" class="hover:underline transition-all">{{ nav.DSA }}</a>
            <a routerLink="/timeline" class="hover:underline transition-all">{{ nav.EXPERIENCE }}</a>
          </nav>
          
          <!-- Theme Toggle -->
          <button (click)="toggleTheme()" class="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
              {{ isDark ? '☀️' : '🌙' }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="md:hidden p-3 text-white" style="background: rgba(255,255,255,0.1); border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); min-width: 44px; min-height: 44px;">
            <span *ngIf="!isMobileMenuOpen" style="font-size: 18px;">☰</span>
            <span *ngIf="isMobileMenuOpen" style="font-size: 18px;">✕</span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="md:hidden" [class.hidden]="!isMobileMenuOpen" style="background: rgba(0,0,0,0.9); border-top: 1px solid rgba(255,255,255,0.1);">
        <nav class="px-4 py-2 space-y-2">
          <a routerLink="/" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05); margin-bottom: 8px;">{{ nav.HOME }}</a>
          <a routerLink="/skills" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05); margin-bottom: 8px;">{{ nav.SKILLS }}</a>
          <a routerLink="/projects" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05); margin-bottom: 8px;">{{ nav.PROJECTS }}</a>
          <a routerLink="/diagram" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05); margin-bottom: 8px;">Diagram</a>
          <a routerLink="/dsa" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05); margin-bottom: 8px;">{{ nav.DSA }}</a>
          <a routerLink="/timeline" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm text-white" style="background: rgba(255,255,255,0.05);">{{ nav.EXPERIENCE }}</a>
        </nav>
      </div>
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