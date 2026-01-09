import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="getBoxClasses()" class="rounded-lg p-4 mb-4">
      <h3 [class]="getTitleClasses()" class="font-medium mb-2">{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  `
})
export class InfoBoxComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' | 'purple' = 'info';
  @Input() title: string = '';

  getBoxClasses(): string {
    const baseClasses = 'border';
    switch (this.type) {
      case 'info': return `${baseClasses} bg-blue-500/10 border-blue-500/20`;
      case 'success': return `${baseClasses} bg-green-500/10 border-green-500/20`;
      case 'warning': return `${baseClasses} bg-yellow-500/10 border-yellow-500/20`;
      case 'error': return `${baseClasses} bg-red-500/10 border-red-500/20`;
      case 'purple': return `${baseClasses} bg-purple-500/10 border-purple-500/20`;
      default: return `${baseClasses} bg-blue-500/10 border-blue-500/20`;
    }
  }

  getTitleClasses(): string {
    switch (this.type) {
      case 'info': return 'text-blue-400';
      case 'success': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  }
}