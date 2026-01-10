import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-git-basics-notes',
  templateUrl: './notes.component.html'
})
export class GitBasicsNotesComponent implements OnInit {

  basicCommandsCode = `# Initialize a new Git repository
git init

# Check repository status
git status

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Your commit message"

# View commit history
git log
git log --oneline  # Compact view`;

  basicCommandsOutput = `Initialized empty Git repository in /project/.git/
On branch main
Changes to be committed:
  new file:   filename.txt
[main abc1234] Your commit message
 1 file changed, 1 insertion(+)`;

  configurationCode = `# Set global user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list

# Set local configuration (for current repo only)
git config user.name "Project Name"
git config user.email "project@example.com"`;

  workingDirectoryCode = `# Working Directory → Staging Area → Repository

# 1. Working Directory (your files)
echo "Hello Git" > hello.txt

# 2. Staging Area (git add)
git add hello.txt

# 3. Repository (git commit)
git commit -m "Add hello.txt"

# Check differences
git diff           # Working vs Staging
git diff --staged  # Staging vs Repository`;

  practiceCode = `# Git Basics Practice
# Complete workflow example

# 1. Initialize repository
git init my-project
cd my-project

# 2. Configure Git
git config user.name "Developer"
git config user.email "dev@example.com"

# 3. Create and add files
echo "# My Project" > README.md
echo "console.log('Hello');" > app.js

# 4. Stage and commit
git add .
git commit -m "Initial commit: Add README and app.js"

# 5. Check history
git log --oneline`;

  practiceOutput = `Initialized empty Git repository in my-project/.git/
abc1234 Initial commit: Add README and app.js`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Git Basics - My Notes');
  }
}