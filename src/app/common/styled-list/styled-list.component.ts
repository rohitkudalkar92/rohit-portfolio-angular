import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-styled-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="text-secondary text-sm space-y-1 list-disc list-inside">
      <li *ngFor="let item of items">
        <strong>{{item.label}}:</strong> {{item.text}}
      </li>
    </ul>
  `
})
export class StyledListComponent {
  @Input() items: {label: string, text: string}[] = [];
}
