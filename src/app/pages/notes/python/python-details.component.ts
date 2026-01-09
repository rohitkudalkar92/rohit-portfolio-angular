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

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Learning');
  }

  filterTopics(): void {
    this.filteredTopics = this.pythonTopics.filter(topic =>
      topic.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}