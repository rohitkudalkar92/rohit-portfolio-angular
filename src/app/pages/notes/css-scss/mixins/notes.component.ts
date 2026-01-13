import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-mixins-notes',
  templateUrl: './notes.component.html'
})
export class MixinsNotesComponent implements OnInit {

  basicExample = `// SCSS Mixins - Reusable groups of CSS declarations
&#64;mixin button-style($bg-color, $text-color) {
  background: $bg-color;
  color: $text-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
}

// Using the mixin
.primary-btn {
  &#64;include button-style(#3b82f6, white);
}

.secondary-btn {
  &#64;include button-style(#64748b, white);
}

/* Compiled CSS Output:
.primary-btn {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.secondary-btn {
  background: #64748b;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
} */`;

  parametersExample = `// Mixins with Parameters and Default Values
&#64;mixin flex-center($direction: row, $gap: 0) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: $direction;
  gap: $gap;
}

&#64;mixin card-shadow($level: 1) {
  &#64;if $level == 1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  } &#64;else if $level == 2 {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  } &#64;else if $level == 3 {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
}

// Usage with different parameters
.navbar {
  &#64;include flex-center();              // Uses defaults: row, 0
}

.sidebar {
  &#64;include flex-center(column, 1rem);  // Custom: column, 1rem gap
}

.card {
  &#64;include card-shadow(2);             // Medium shadow
}`;

  contentExample = `// Mixins with &#64;content - Pass custom CSS blocks
&#64;mixin media-query($breakpoint) {
  &#64;if $breakpoint == mobile {
    &#64;media (max-width: 767px) {
      &#64;content;
    }
  } &#64;else if $breakpoint == tablet {
    &#64;media (max-width: 1023px) {
      &#64;content;
    }
  } &#64;else if $breakpoint == desktop {
    &#64;media (min-width: 1024px) {
      &#64;content;
    }
  }
}

&#64;mixin hover-effect {
  transition: all 0.3s ease;
  
  &:hover {
    &#64;content;
  }
}

// Usage with &#64;content
.responsive-text {
  font-size: 18px;
  
  &#64;include media-query(mobile) {
    font-size: 14px;           // Custom CSS for mobile
    line-height: 1.4;
  }
  
  &#64;include media-query(tablet) {
    font-size: 16px;           // Custom CSS for tablet
  }
}

.interactive-card {
  &#64;include hover-effect {
    transform: scale(1.05);    // Custom hover effect
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}`;

  bestPractices = `// Best Practices for SCSS Mixins

// 1. Use descriptive names
&#64;mixin button-primary-style { /* Good */ }
&#64;mixin btn { /* Bad - too short */ }

// 2. Group related mixins
&#64;mixin typography-heading($size) {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  font-size: $size;
}

&#64;mixin typography-body($size: 16px) {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  font-size: $size;
}

// 3. Use parameters for flexibility
&#64;mixin grid-layout($columns, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

// 4. Avoid overly complex mixins
// Good - focused purpose
&#64;mixin center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Bad - doing too much
&#64;mixin everything($bg, $color, $size, $margin, $padding, $border) {
  // Too many responsibilities
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Mixins - Notes');
  }
}