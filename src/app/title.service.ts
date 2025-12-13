import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly baseTitle = 'Rohit.dev - Frontend Engineer';

  constructor(private title: Title) {}

  setTitle(pageTitle?: string): void {
    const fullTitle = pageTitle ? `${pageTitle} | ${this.baseTitle}` : this.baseTitle;
    this.title.setTitle(fullTitle);
  }
}