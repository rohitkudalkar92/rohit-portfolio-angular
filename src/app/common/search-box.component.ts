import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mb-6">
      <input 
        type="text" 
        [(ngModel)]="searchValue"
        (input)="onSearchChange()"
        [placeholder]="placeholder"
        class="w-full px-4 py-2 bg-secondary text-primary rounded-lg border border-accent/20 focus:border-accent focus:outline-none"
      >
    </div>
  `
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Search...';
  @Input() searchValue: string = '';
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(): void {
    this.searchChange.emit(this.searchValue);
  }
}