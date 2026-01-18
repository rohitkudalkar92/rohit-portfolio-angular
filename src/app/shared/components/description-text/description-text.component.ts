import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class]="getClasses()">{{ text }}</p>
  `
})
export class DescriptionTextComponent {
  @Input() text: string = '';
  @Input() size: 'xs' | 'sm' | 'base' | 'lg' = 'sm';
  @Input() color: 'primary' | 'secondary' | 'muted' | 'accent' = 'secondary';
  @Input() customClass: string = '';

  getClasses(): string {
    const sizeClasses = {
      'xs': 'text-xs',
      'sm': 'text-sm', 
      'base': 'text-base',
      'lg': 'text-lg'
    };

    const colorClasses = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'muted': 'text-muted',
      'accent': 'text-accent'
    };

    return `${colorClasses[this.color]} ${sizeClasses[this.size]} ${this.customClass}`.trim();
  }
}