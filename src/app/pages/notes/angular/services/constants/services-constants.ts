export const SERVICES_CODE_EXAMPLES = {
  service: `import { Injectable } from '@angular/core';

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
}`,

  dependencyInjection: `import { Component } from '@angular/core';
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
}`,

  provider: `// Root level (app.module.ts or main.ts)
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
})`
} as const;

export const SERVICES_BEST_PRACTICES = [
  'Use providedIn: "root" for singleton services',
  'Keep services focused on single responsibility',
  'Use interfaces for service contracts',
  'Implement proper error handling',
  'Use injection tokens for configuration',
  'Avoid circular dependencies',
  'Use factory providers for complex initialization'
] as const;
