import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
          <nav class="hidden md:flex items-center gap-6 text-sm opacity-90" role="navigation" aria-label="Main navigation">
            <a *ngFor="let item of navItems; trackBy: trackByNavItem" 
               [routerLink]="item.path" 
               routerLinkActive="text-primary font-semibold" 
               [routerLinkActiveOptions]="item.exact ? {exact: true} : {exact: false}" 
               class="hover:underline transition-all"
               [attr.aria-current]="item.path === currentRoute ? 'page' : null">
              {{ item.label }}
            </a>
          </nav>
          
          <!-- Theme Toggle -->
          <button (click)="toggleTheme()" class="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
              {{ isDark ? '☀️' : '🌙' }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" 
                  class="md:hidden p-3 text-white glass rounded-lg hover:bg-white/10 transition-all" 
                  [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
                  [attr.aria-expanded]="isMobileMenuOpen">
            <span class="text-lg" [innerHTML]="isMobileMenuOpen ? '✕' : '☰'"></span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="md:hidden mobile-nav" [class.hidden]="!isMobileMenuOpen">
        <nav class="px-4 py-2 space-y-2" role="navigation" aria-label="Mobile navigation">
          <a *ngFor="let item of navItems; trackBy: trackByNavItem" 
             [routerLink]="item.path" 
             routerLinkActive="bg-primary/20 text-primary" 
             [routerLinkActiveOptions]="item.exact ? {exact: true} : {exact: false}"
             (click)="closeMobileMenu()" 
             class="block py-3 px-4 rounded-lg text-sm text-white hover:bg-white/10 transition-all mobile-nav-item"
             [attr.aria-current]="item.path === currentRoute ? 'page' : null">
            {{ item.label }}
          </a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  isDark = false;
  isMobileMenuOpen = false;
  currentRoute = '';
  
  readonly brandName = CONSTANTS.BRAND_NAME;
  readonly brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  readonly nav = CONSTANTS.NAV;
  
  readonly navItems = [
    { path: '/', label: this.nav.HOME, exact: true },
    { path: '/skills', label: this.nav.SKILLS },
    { path: '/projects', label: this.nav.PROJECTS },
    { path: '/diagram', label: 'Diagram' },
    { path: '/dsa', label: this.nav.DSA },
    { path: '/timeline', label: this.nav.EXPERIENCE }
  ];

  trackByNavItem(index: number, item: any): string {
    return item.label;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeTheme();
    this.setupRouterSubscription();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeTheme() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  private setupRouterSubscription() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        this.currentRoute = (event as NavigationEnd).urlAfterRedirects;
        this.closeMobileMenu();
      });
  }

  toggleTheme() {
    this.animateThemeTransition(() => {
      this.isDark = !this.isDark;
      this.applyTheme();
      this.saveThemePreference();
    });
  }

  private animateThemeTransition(callback: () => void) {
    const body = document.body;
    body.style.opacity = '0.8';
    body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      callback();
      setTimeout(() => {
        body.style.opacity = '1';
        body.style.transform = 'scale(1)';
      }, 100);
    }, 150);
  }

  private saveThemePreference() {
    sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
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