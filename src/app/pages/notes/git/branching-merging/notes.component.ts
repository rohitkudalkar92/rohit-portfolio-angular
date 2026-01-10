import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-branching-merging-notes',
  templateUrl: './notes.component.html'
})
export class BranchingMergingNotesComponent implements OnInit {

  branchingCode = `# Create and switch to new branch
git branch feature-login
git checkout feature-login
# Or combine both commands
git checkout -b feature-login

# List all branches
git branch
git branch -a  # Include remote branches

# Switch between branches
git checkout main
git checkout feature-login

# Delete branch (safe - prevents deletion if unmerged changes)
git branch -d feature-login  

# Force delete branch (dangerous - deletes even with unmerged changes)
git branch -D feature-login`;

  mergingCode = `# Merge branch into current branch
git checkout main
git merge feature-login

# Merge with commit message
git merge feature-login -m "Add login feature"

# Fast-forward merge (no merge commit)
git merge --ff-only feature-login

# No fast-forward (always create merge commit)
git merge --no-ff feature-login`;

  conflictResolutionCode = `# When conflicts occur during merge
git merge feature-branch
# Auto-merging file.txt
# CONFLICT (content): Merge conflict in file.txt

# View conflicted files
git status

# Edit conflicted files (remove conflict markers)
# <<<<<<< HEAD
# Current branch content
# =======
# Feature branch content
# >>>>>>> feature-branch

# After resolving conflicts
git add file.txt
git commit -m "Resolve merge conflict"`;

  practiceCode = `# Branching and Merging Practice

# 1. Create feature branch
git checkout -b add-navigation
echo "nav { display: flex; }" > nav.css
git add nav.css
git commit -m "Add navigation styles"

# 2. Switch to main and make changes
git checkout main
echo "body { margin: 0; }" > main.css
git add main.css
git commit -m "Add main styles"

# 3. Merge feature branch
git merge add-navigation

# 4. Clean up
git branch -d add-navigation`;

  practiceOutput = `Switched to a new branch 'add-navigation'
[add-navigation abc1234] Add navigation styles
Switched to branch 'main'
[main def5678] Add main styles
Merge made by the 'recursive' strategy.
 nav.css | 1 +
 1 file changed, 1 insertion(+)
Deleted branch add-navigation (was abc1234).`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Branching and Merging - My Notes');
  }
}