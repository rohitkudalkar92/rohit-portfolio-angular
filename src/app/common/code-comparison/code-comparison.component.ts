import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-comparison',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h4 class="text-red-400 font-semibold mb-2">❌ BAD</h4>
        <pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code [class]="'language-' + language">{{ badCode }}</code></pre>
      </div>
      <div>
        <h4 class="text-green-400 font-semibold mb-2">✅ GOOD</h4>
        <pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code [class]="'language-' + language">{{ goodCode }}</code></pre>
      </div>
    </div>
  `
})
export class CodeComparisonComponent {
  @Input() badCode = '';
  @Input() goodCode = '';
  @Input() language = 'javascript';
}
