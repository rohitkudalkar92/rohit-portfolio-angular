import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-reference',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <a *ngFor="let topic of topics" 
         (click)="topicClick.emit(topic.id)" 
         class="glass p-3 rounded-lg hover:opacity-80 transition-opacity cursor-pointer">
        <span class="text-accent font-semibold">{{ topic.number }}.</span> {{ topic.title }}
      </a>
    </div>
  `
})
export class QuickReferenceComponent {
  @Input() topics: ReadonlyArray<{ id: string; number: number; title: string }> = [];
  @Output() topicClick = new EventEmitter<string>();
}
