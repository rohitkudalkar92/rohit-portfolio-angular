import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONSTANTS } from '../../constants';
import { LogoComponent } from '../logo/logo.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, LogoComponent, IconButtonComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isDark = false;
  isMobileMenuOpen = false;
  brandName = CONSTANTS.BRAND_NAME;
  brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  nav = CONSTANTS.NAV;
  routes = CONSTANTS.ROUTES;

  navItems = [
    { route: this.routes.HOME, label: this.nav.HOME, exact: true },
    { route: this.routes.SKILLS, label: this.nav.SKILLS, exact: false },
    { route: this.routes.PROJECTS, label: this.nav.PROJECTS, exact: false },
    { route: this.routes.EXPERIENCE, label: this.nav.EXPERIENCE, exact: false },
    { route: this.routes.NOTES, label: this.nav.NOTES, exact: false }
  ];

  ngOnInit() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
    sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  getButtonClasses(): string {
    return this.isDark 
      ? 'border border-black/20' 
      : 'border border-white/20';
  }

  getHeaderClasses(): string {
    return this.isDark 
      ? 'bg-white/90 text-gray-900 border border-black/10' 
      : 'bg-gray-800/90 text-white border border-white/10';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}