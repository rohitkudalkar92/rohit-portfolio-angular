import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { GIT_TOPICS, GitTopic } from '../../../data/git-topics.data';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html'
})
export class GitDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  gitTopics = GIT_TOPICS;
  filteredTopics = GIT_TOPICS;
  searchTerm = '';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Git Learning');
  }

  filterTopics(): void {
    this.filteredTopics = this.gitTopics.filter(topic =>
      topic.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}