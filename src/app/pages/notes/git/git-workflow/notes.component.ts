import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-git-workflow-notes',
  templateUrl: './notes.component.html'
})
export class GitWorkflowNotesComponent implements OnInit {

  gitFlowCode = `# GitFlow workflow - A branching model for releases

# Initialize GitFlow in repository
git flow init

# Feature development
git flow feature start new-login-system
# Work on feature, make commits
git add .
git commit -m "Add login validation"
git flow feature finish new-login-system

# Release preparation
git flow release start 1.2.0
# Bug fixes, version updates
git commit -m "Update version to 1.2.0"
git flow release finish 1.2.0

# Hotfix for production
git flow hotfix start critical-bug-fix
# Fix the bug
git commit -m "Fix critical security issue"
git flow hotfix finish critical-bug-fix`;

  githubFlowCode = `# GitHub Flow - Simpler workflow for continuous deployment

# 1. Create feature branch from main
git checkout main
git pull origin main
git checkout -b add-user-profile

# 2. Make changes and commit
git add .
git commit -m "Add user profile component"
git push origin add-user-profile

# 3. Create Pull Request on GitHub
# 4. Code review and discussion
# 5. Merge to main after approval
# 6. Deploy main branch to production`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Git Workflow - My Notes');
  }
}