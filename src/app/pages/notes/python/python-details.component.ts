import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { PYTHON_TOPICS, PythonTopic } from '../../../data/python-topics.data';

@Component({
  selector: 'app-python-details',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink, FormsModule],
  templateUrl: './python-details.component.html'
})
export class PythonDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  pythonTopics = PYTHON_TOPICS;
  filteredTopics = PYTHON_TOPICS;
  searchTerm = '';
  sortBy = 'dateCreated';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.sortTopics();
  }

  filterTopics(): void {
    this.filteredTopics = this.pythonTopics.filter(topic =>
      topic.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortTopics();
  }

  sortTopics(): void {
    this.filteredTopics.sort((a, b) => {
      switch (this.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'difficulty':
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case 'dateCreated':
          return a.id.localeCompare(b.id); // Using id as date proxy
        default:
          return 0;
      }
    });
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  }
}