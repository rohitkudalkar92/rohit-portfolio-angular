import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule, ParagraphComponent, CodeBlockComponent],
  template: `
    <div class="glass rounded-xl p-4 md:p-6 my-8">
      <h2 class="text-xl font-semibold text-primary mb-4">{{ title }}</h2>
      <app-paragraph [text]="description" *ngIf="description"></app-paragraph>
      <app-code-block *ngIf="code" [language]="language" [code]="code" [output]="output"></app-code-block>
      <ng-content></ng-content>
    </div>
  `
})
export class ContentSectionComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() code?: string;
  @Input() language: string = 'typescript';
  @Input() output?: string;
}