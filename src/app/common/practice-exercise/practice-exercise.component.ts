import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from './code-block.component';

@Component({
  selector: 'app-practice-exercise',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
      <h3 class="text-blue-400 font-medium mb-2">{{ title }}</h3>
      <p class="text-secondary text-sm mb-3">{{ description }}</p>
      <app-code-block [code]="code" [output]="output"></app-code-block>
    </div>
  `
})
export class PracticeExerciseComponent {
  @Input() title: string = '💡 Practice Exercise';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() output?: string;
}