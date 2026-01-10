import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { PYTHON_TOPICS, PythonTopic } from '../../../data/python-topics.data';

@Component({
  selector: 'app-python-details',
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