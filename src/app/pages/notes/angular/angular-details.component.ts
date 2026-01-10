import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { ANGULAR_TOPICS } from '../../../data/angular-topics.data';

@Component({
  selector: 'app-angular-details',
  template: `
    <app-layout>
      <app-back-nav backLink="/notes" backText="Back to Notes"></app-back-nav>
      
      <app-page-header 
        title="Angular" 
        subtitle="Modern web framework for building dynamic applications">
      </app-page-header>
      
      <app-search-box 
        placeholder="Search Angular topics..." 
        [searchValue]="searchTerm" 
        (searchChange)="onSearchChange($event)">
      </app-search-box>
      
      <div class="container mx-auto px-4 py-8">
        <app-topics-list [topics]="filteredTopics"></app-topics-list>
      </div>
    </app-layout>
  `
})
export class AngularDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  topics = ANGULAR_TOPICS;
  filteredTopics = ANGULAR_TOPICS;
  searchTerm = '';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular - Notes');
  }

  filterTopics(): void {
    this.filteredTopics = this.topics.filter(topic =>
      topic.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue;
    this.filterTopics();
  }
}