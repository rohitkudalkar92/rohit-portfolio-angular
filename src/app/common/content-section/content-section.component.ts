import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass rounded-xl p-6 my-8">
      <h2 class="text-xl font-semibold text-primary mb-4">{{ title }}</h2>
      <p class="text-secondary mb-4" *ngIf="description">{{ description }}</p>
      <ng-content></ng-content>
    </div>
  `
})
export class ContentSectionComponent {
  @Input() title: string = '';
  @Input() description?: string;
}