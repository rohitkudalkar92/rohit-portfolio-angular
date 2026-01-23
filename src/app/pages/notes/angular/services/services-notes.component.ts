import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { SERVICES_CODE_EXAMPLES, SERVICES_BEST_PRACTICES } from './constants/services-constants';

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
  readonly serviceExample = SERVICES_CODE_EXAMPLES.service;
  readonly diExample = SERVICES_CODE_EXAMPLES.dependencyInjection;
  readonly providerExample = SERVICES_CODE_EXAMPLES.provider;
  readonly bestPractices = SERVICES_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Services & Dependency Injection - Angular');
  }
}