import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div [class]="'rounded-lg bg-gradient-to-br flex items-center justify-center font-bold text-black ' + sizeClass + ' ' + gradientClass">
      {{ text }}
    </div>
  `
})
export class LogoComponent {
  @Input() text: string = 'R';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() gradientClass: string = 'from-indigo-400 to-purple-600';

  get sizeClass(): string {
    const sizes = {
      'sm': 'w-8 h-8 text-sm',
      'md': 'w-10 h-10 text-base',
      'lg': 'w-12 h-12 text-lg'
    };
    return sizes[this.size];
  }
}
