import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { GradientTextComponent } from '../gradient-text/gradient-text.component';
import { DescriptionTextComponent } from '../../shared/components/description-text/description-text.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, GradientTextComponent, DescriptionTextComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      
      <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div class="mb-8">
          <h1 class="text-9xl font-bold">
            <app-gradient-text text="404" gradientClass="from-indigo-300 to-pink-400"></app-gradient-text>
          </h1>
          <h2 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
          <app-description-text 
            text="Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL." 
            customClass="text-dark max-w-md">
          </app-description-text>
        </div>
        
        <div class="flex gap-4">
          <a routerLink="/" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-black font-semibold btn-accent hover:opacity-90 transition-opacity">
            Back to Home
          </a>
          <button (click)="goBack()" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:opacity-90 transition-opacity">
            Go to Previous Page
          </button>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {
  constructor(private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }
}