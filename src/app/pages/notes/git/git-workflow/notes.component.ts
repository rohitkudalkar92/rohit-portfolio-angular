import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-git-workflow-notes',
  templateUrl: './notes.component.html'
})
export class GitWorkflowNotesComponent implements OnInit {

  gitFlowCode = `# GitFlow workflow
git flow init
git flow feature start new-feature
git flow feature finish new-feature
git flow release start 1.0.0
git flow release finish 1.0.0`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Git Workflow - My Notes');
  }
}