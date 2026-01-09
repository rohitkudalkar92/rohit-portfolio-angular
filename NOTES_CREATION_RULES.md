# Notes Component Creation Rules

## 📋 MANDATORY RULES for Creating Notes Components

### 1. **HTML Structure - ONLY Reusable Components**
```html
<app-layout>
  <!-- Navigation -->
  <app-back-nav backLink="/notes/python" backText="Back to Python Topics"></app-back-nav>
  
  <!-- Page Header -->
  <app-topic-header 
    title="Topic Title" 
    description="Topic description">
  </app-topic-header>

  <!-- Content Sections -->
  <div>
    <!-- Section Name -->
    <app-content-section title="Section Title" description="Section description">
      <app-code-block [code]="codeExample" [output]="outputExample" language="Python"></app-code-block>
    </app-content-section>

    <!-- Practice Exercise -->
    <app-content-section title="Practice">
      <app-practice-exercise 
        title="💡 Practice Exercise"
        description="Exercise description"
        [code]="practiceCode"
        [output]="practiceOutput">
      </app-practice-exercise>
    </app-content-section>
  </div>
</app-layout>
```

### 2. **Available Reusable Components**
- `app-back-nav` - Navigation back button
- `app-topic-header` - Page header with title/description
- `app-content-section` - Main content wrapper
- `app-code-block` - Code examples with output
- `app-info-box` - Colored information boxes (info, success, warning, error, purple)
- `app-data-types-grid` - Grid layout for data types/examples
- `app-practice-exercise` - Practice exercises with code/output

### 3. **TypeScript Structure**
```typescript
export class ComponentName implements OnInit {
  // Code examples as template literals
  exampleCode = `code here`;
  exampleOutput = `output here`;
  
  // Data arrays for grids
  dataItems: DataTypeItem[] = [
    {
      title: 'Title',
      subtitle: 'Subtitle', 
      description: 'Description',
      code: `code example`
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Page Title - My Notes');
  }
}
```

### 4. **HTML Comments - MANDATORY**
```html
<!-- Navigation -->
<!-- Page Header -->
<!-- Content Sections -->
<!-- Section Name -->
<!-- Subsection Name -->
<!-- Practice Exercise -->
```

### 5. **Import Requirements**
```typescript
import { BackNavComponent } from '../../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../../common/code-block.component';
import { InfoBoxComponent } from '../../../../common/info-box.component';
import { ContentSectionComponent } from '../../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../../common/topic-header.component';
import { DataTypesGridComponent, DataTypeItem } from '../../../../common/data-types-grid.component';
import { PracticeExerciseComponent } from '../../../../common/practice-exercise.component';
```

### 6. **FORBIDDEN in HTML**
❌ **NEVER USE:**
- Hardcoded `<div class="glass rounded-xl p-6">`
- Hardcoded `<pre><code>` blocks
- Hardcoded styling classes
- Inline code strings with escaping
- Any custom HTML structure

### 7. **Code Examples Rules**
- Use template literals in TypeScript: `code = \`example\`;`
- Handle HTML entities properly: `&lt;` instead of `<`
- No inline code in HTML attributes
- All code in TypeScript component properties

### 8. **File Organization**
```
notes/
├── topic-name/
│   ├── notes.component.html    # ONLY reusable components + comments
│   ├── notes.component.ts      # All code examples and data
│   └── practice.py            # Optional practice file
```

## ✅ CHECKLIST Before Creating Notes
- [ ] HTML uses ONLY reusable components
- [ ] HTML has clear comments for all sections
- [ ] All code examples in TypeScript as template literals
- [ ] No hardcoded HTML structure
- [ ] All imports added to component
- [ ] Title service configured
- [ ] Practice exercises use `app-practice-exercise`

## 🎯 GOAL
**Clean, maintainable, consistent notes using only reusable components with clear HTML structure and comprehensive comments.**