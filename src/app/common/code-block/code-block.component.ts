import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-900 rounded-lg overflow-hidden mb-4" [class.mt-4]="showOutput">
      <div class="px-4 py-2 bg-gray-800" *ngIf="language">
        <span class="text-sm text-gray-300">{{ language }}</span>
      </div>
      <pre class="p-4 text-sm text-gray-100 overflow-x-auto"><code [innerHTML]="code"></code></pre>
    </div>
    
    <div class="mt-4 bg-gray-800 rounded-lg overflow-hidden mb-4" *ngIf="output">
      <div class="px-4 py-2 bg-gray-700">
        <span class="text-sm text-green-400">Output</span>
      </div>
      <pre class="p-4 text-sm text-green-400"><code [innerHTML]="output"></code></pre>
    </div>
  `
})
export class CodeBlockComponent {
  @Input() code: string = '';
  @Input() output?: string;
  @Input() language?: string = 'Python';
  @Input() showOutput: boolean = false;
}