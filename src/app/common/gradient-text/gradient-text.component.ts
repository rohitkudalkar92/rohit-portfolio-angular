import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gradient-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="'text-transparent bg-clip-text bg-gradient-to-r ' + gradientClass">
      {{ text }}
    </span>
  `
})
export class GradientTextComponent {
  @Input() text: string = '';
  @Input() gradientClass: string = 'from-indigo-300 to-pink-400';
}
