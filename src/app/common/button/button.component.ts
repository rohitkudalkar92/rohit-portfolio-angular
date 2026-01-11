import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a *ngIf="routerLink; else buttonTemplate" 
       [routerLink]="routerLink" 
       [class]="getClasses()">
      {{ text }}
      <svg *ngIf="variant === 'details'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
    
    <ng-template #buttonTemplate>
      <button [class]="getClasses()" (click)="onClick()">
        {{ text }}
        <svg *ngIf="variant === 'details'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </ng-template>
  `
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: 'accent' | 'primary' | 'secondary' | 'details' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() block = false;
  @Input() routerLink?: string;

  onClick() {
    // Handle button click if needed
  }

  getClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-200';
    
    const variantClasses = {
      accent: 'text-black btn-accent',
      primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
      secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300',
      details: 'text-white bg-blue-500 hover:bg-blue-600 shadow-sm hover:shadow-md w-full'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-3',
      lg: 'px-6 py-4 text-lg'
    };
    
    const blockClass = this.block ? 'w-full' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${blockClass}`.trim();
  }
}