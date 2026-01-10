import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <p class="text-dark mt-2">{{ description }}</p>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}