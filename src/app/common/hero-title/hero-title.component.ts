import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientTextComponent } from '../gradient-text/gradient-text.component';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  imports: [CommonModule, GradientTextComponent],
  template: `
    <h1 class="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left">
      {{ part1 }} <app-gradient-text [text]="clean" [gradientClass]="gradient1"></app-gradient-text>
      {{ and }}
      <app-gradient-text [text]="impactful" [gradientClass]="gradient2"></app-gradient-text>
      {{ part2 }}
    </h1>
  `
})
export class HeroTitleComponent {
  @Input() part1: string = '';
  @Input() clean: string = '';
  @Input() and: string = '';
  @Input() impactful: string = '';
  @Input() part2: string = '';
  @Input() gradient1: string = 'from-indigo-300 to-pink-400';
  @Input() gradient2: string = 'from-green-200 to-yellow-200';
}
