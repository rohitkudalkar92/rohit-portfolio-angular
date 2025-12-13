import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly baseTitle = CONSTANTS.BRAND_FULL_TITLE;

  constructor(private title: Title) {}

  setTitle(pageTitle?: string): void {
    const fullTitle = pageTitle ? `${pageTitle} | ${this.baseTitle}` : this.baseTitle;
    this.title.setTitle(fullTitle);
  }
}