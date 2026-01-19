import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-system-design',
  templateUrl: './system-design.component.html'
})
export class SystemDesignComponent implements OnInit {

  designBasics = [
    {label: 'Scalability', text: 'Handle growing amounts of work'},
    {label: 'Reliability', text: 'System works correctly even with failures'},
    {label: 'Availability', text: 'System is operational when needed'},
    {label: 'Maintainability', text: 'Easy to operate and modify'}
  ];

  scalabilityTypes = [
    {label: 'Vertical Scaling', text: 'Add more power to existing machine (CPU, RAM)'},
    {label: 'Horizontal Scaling', text: 'Add more machines to distribute load'},
    {label: 'Auto Scaling', text: 'Automatically adjust resources based on demand'}
  ];

  loadBalancerTypes = [
    {label: 'Round Robin', text: 'Distribute requests evenly across servers'},
    {label: 'Least Connections', text: 'Send to server with fewest active connections'},
    {label: 'IP Hash', text: 'Route based on client IP address'}
  ];

  cachingStrategies = [
    {label: 'Cache Aside', text: 'Application manages cache and database'},
    {label: 'Write Through', text: 'Write to cache and database simultaneously'},
    {label: 'Write Behind', text: 'Write to cache first, database later'},
    {label: 'Refresh Ahead', text: 'Automatically refresh cache before expiry'}
  ];

  databaseTypes = [
    {label: 'SQL', text: 'Structured data with ACID properties (MySQL, PostgreSQL)'},
    {label: 'NoSQL', text: 'Flexible schema for unstructured data (MongoDB, Cassandra)'},
    {label: 'In-Memory', text: 'Fast access stored in RAM (Redis, Memcached)'},
    {label: 'Graph', text: 'Relationship-focused data (Neo4j)'}
  ];

  capTheorem = [
    {label: 'Consistency', text: 'All nodes see the same data at the same time'},
    {label: 'Availability', text: 'Every request receives a response'},
    {label: 'Partition Tolerance', text: 'System continues despite network failures'}
  ];

  microservicesAdvantages = [
    {label: 'Independent Deployment', text: 'Deploy services separately'},
    {label: 'Technology Diversity', text: 'Use different tech stacks per service'},
    {label: 'Scalability', text: 'Scale individual services independently'},
    {label: 'Fault Isolation', text: 'Failure in one service doesn\'t affect others'}
  ];

  apiDesignPrinciples = [
    {label: 'RESTful', text: 'Use HTTP methods (GET, POST, PUT, DELETE)'},
    {label: 'Versioning', text: 'Version APIs to maintain backward compatibility'},
    {label: 'Pagination', text: 'Limit data returned in single request'},
    {label: 'Rate Limiting', text: 'Prevent abuse by limiting requests'}
  ];

  securityPractices = [
    {label: 'Authentication', text: 'Verify user identity (JWT, OAuth)'},
    {label: 'Authorization', text: 'Control access to resources (RBAC)'},
    {label: 'Encryption', text: 'Protect data in transit (HTTPS) and at rest'},
    {label: 'Input Validation', text: 'Sanitize all user inputs'}
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('System Design - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
