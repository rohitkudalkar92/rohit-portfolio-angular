import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass rounded-xl p-6 my-8">
      <div class="flex items-start justify-between mb-4">
        <div>
          <h1 class="text-3xl font-bold text-primary mb-2">{{ title }}</h1>
          <p class="text-secondary">{{ description }}</p>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400" *ngIf="badge">
          {{ badge }}
        </span>
      </div>
    </div>
  `
})
export class TopicHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() badge?: string;
}