import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-services-notes',
  template: `
    <app-layout>
      <app-back-nav backLink="/notes/angular" backText="Back to Angular"></app-back-nav>
      
      <app-topic-header 
        title="Services & Dependency Injection"
        description="Shared functionality and DI patterns in Angular">
      </app-topic-header>

      <app-content-section title="What are Services?">
        <p>Services are classes that provide shared functionality across components. They follow the singleton pattern and are used for:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Data sharing between components</li>
          <li>Business logic implementation</li>
          <li>API communication</li>
          <li>Utility functions</li>
        </ul>
      </app-content-section>

      <app-content-section title="Creating a Service">
        <p>Use the <code>&#64;Injectable</code> decorator to create a service:</p>
        <app-code-block 
          language="typescript"
          [code]="serviceExample">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Dependency Injection">
        <p>Angular's DI system provides dependencies to components and services:</p>
        <app-code-block 
          language="typescript"
          [code]="diExample">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Service Providers">
        <p>Configure how services are provided:</p>
        <app-code-block 
          language="typescript"
          [code]="providerExample">
        </app-code-block>
      </app-content-section>

      <app-info-box 
        type="info"
        title="Best Practices">
        <ul class="list-disc ml-6 space-y-1">
          <li *ngFor="let practice of bestPractices">{{ practice }}</li>
        </ul>
      </app-info-box>
    </app-layout>
  `
})
export class ServicesNotesComponent implements OnInit {
  
  serviceExample = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Singleton service
})
export class DataService {
  private data: any[] = [];

  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item);
  }

  clearData() {
    this.data = [];
  }
}`;

  diExample = `import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-my-component',
  template: \`
    <div>
      <p>Items: {{ items.length }}</p>
      <button (click)="addItem()">Add Item</button>
    </div>
  \`
})
export class MyComponent {
  items: any[] = [];

  // Inject service via constructor
  constructor(private dataService: DataService) {
    this.items = this.dataService.getData();
  }

  addItem() {
    this.dataService.addData({ id: Date.now() });
    this.items = this.dataService.getData();
  }
}`;

  providerExample = `// Root level (app.module.ts or main.ts)
@NgModule({
  providers: [
    DataService,
    { provide: ApiService, useClass: MockApiService },
    { provide: 'API_URL', useValue: 'https://api.example.com' }
  ]
})

// Component level
@Component({
  providers: [LocalService] // New instance per component
})

// Standalone component
@Component({
  standalone: true,
  providers: [DataService]
})`;

  bestPractices = [
    'Use providedIn: "root" for singleton services',
    'Keep services focused on single responsibility',
    'Use interfaces for service contracts',
    'Implement proper error handling',
    'Use injection tokens for configuration',
    'Avoid circular dependencies',
    'Use factory providers for complex initialization'
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Services & Dependency Injection - Angular');
  }
}