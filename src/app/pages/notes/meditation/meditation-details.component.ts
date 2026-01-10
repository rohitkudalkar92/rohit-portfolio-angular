import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { MEDITATION_TOPICS, MeditationTopic } from '../../../data/meditation-topics.data';

@Component({
  selector: 'app-meditation-details',
  templateUrl: './meditation-details.component.html'
})
export class MeditationDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  meditationTopics = MEDITATION_TOPICS;
  filteredTopics = MEDITATION_TOPICS;
  searchTerm = '';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Meditation Learning');
  }

  filterTopics(): void {
    this.filteredTopics = this.meditationTopics.filter(topic =>
      topic.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchChange(searchValue: string): void {
    this.searchTerm = searchValue;
    this.filterTopics();
  }
}