import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-advanced-git-notes',
  templateUrl: './notes.component.html'
})
export class AdvancedGitNotesComponent implements OnInit {

  advancedCode = `# Rebase commits
git rebase -i HEAD~3

# Cherry-pick commits
git cherry-pick abc1234

# Stash changes
git stash
git stash pop
git stash list

# Reset commits
git reset --soft HEAD~1
git reset --hard HEAD~1`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Advanced Git - My Notes');
  }
}