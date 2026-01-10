import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block.component';

export interface DataTypeItem {
  title: string;
  subtitle: string;
  description: string;
  code: string;
}

@Component({
  selector: 'app-data-types-grid',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <div class="grid md:grid-cols-2 gap-6">
      <div *ngFor="let item of items">
        <h3 class="text-lg font-medium text-primary mb-2">{{ item.title }} ({{ item.subtitle }})</h3>
        <p class="text-secondary text-sm mb-3">{{ item.description }}</p>
        <app-code-block [code]="item.code"></app-code-block>
      </div>
    </div>
  `
})
export class DataTypesGridComponent {
  @Input() items: DataTypeItem[] = [];
}