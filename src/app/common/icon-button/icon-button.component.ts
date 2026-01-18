import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="handleClick()" 
      [class]="'p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 ' + customClass">
      <span class="inline-block transition-transform duration-300" [class.rotate-180]="rotate">
        {{ icon }}
      </span>
    </button>
  `
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Input() rotate: boolean = false;
  @Input() customClass: string = '';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
