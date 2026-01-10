import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="flex items-center justify-between mb-8">
      <a [routerLink]="backLink"
        class="px-4 py-2 bg-secondary text-secondary rounded-lg hover:bg-accent/20 transition-colors">
        ← {{ backText }}
      </a>
    </div>
  `
})
export class BackNavComponent {
  @Input() backLink: string = '/';
  @Input() backText: string = 'Back';
}