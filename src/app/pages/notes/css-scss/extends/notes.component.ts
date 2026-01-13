import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-extends-notes',
  templateUrl: './notes.component.html'
})
export class ExtendsNotesComponent implements OnInit {

  basicExample = `// SCSS Extends - Inherit styles from other selectors
.button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button {
  &#64;extend .button-base;
  background: #3b82f6;
  color: white;
  
  &:hover {
    background: #2563eb;
  }
}

.secondary-button {
  &#64;extend .button-base;
  background: #64748b;
  color: white;
  
  &:hover {
    background: #475569;
  }
}

/* Compiled CSS Output:
.button-base, .primary-button, .secondary-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button {
  background: #3b82f6;
  color: white;
}

.primary-button:hover {
  background: #2563eb;
}

.secondary-button {
  background: #64748b;
  color: white;
}

.secondary-button:hover {
  background: #475569;
} */`;

  placeholderExample = `// Placeholder Selectors (%) - Don't appear in compiled CSS
%button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

%card-base {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

// Using placeholders
.btn-primary {
  &#64;extend %button-base;
  background: #3b82f6;
  color: white;
}

.btn-danger {
  &#64;extend %button-base;
  background: #ef4444;
  color: white;
}

.info-card {
  &#64;extend %card-base;
  border-left: 4px solid #3b82f6;
}

/* Compiled Output - Notice %button-base doesn't appear:
.btn-primary, .btn-danger {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.info-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-left: 4px solid #3b82f6;
} */`;

  goodPractice = `// Good Practice - Use extends for related components
%message-base {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.success-message {
  &#64;extend %message-base;
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.error-message {
  &#64;extend %message-base;
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.warning-message {
  &#64;extend %message-base;
  background: #fffbeb;
  color: #d97706;
  border: 1px solid #fed7aa;
}`;

  badPractice = `// Bad Practice - Avoid these mistakes

// 1. Extending unrelated selectors
.navigation {
  display: flex;
  background: #1f2937;
}

.footer {
  &#64;extend .navigation; // X Bad - footer isn't navigation
  position: fixed;
  bottom: 0;
}

// 2. Extending complex selectors
.header .nav .item a {
  color: blue;
}

.sidebar-link {
  &#64;extend .header .nav .item a; // X Bad - too complex
}

// 3. Overusing extends instead of mixins
%everything {
  padding: 1rem;
  margin: 1rem;
  background: white;
  border: 1px solid #ccc;
  // ... 20 more properties
}

.card {
  &#64;extend %everything; // X Bad - too many unrelated styles
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Extends - Notes');
  }
}