import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-remote-repositories-notes',
  templateUrl: './notes.component.html'
})
export class RemoteRepositoriesNotesComponent implements OnInit {

  remoteBasicsCode = `# Add remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Push to remote
git push origin main
git push -u origin main  # Set upstream

# Pull from remote
git pull origin main

# Clone repository
git clone https://github.com/username/repo.git`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Remote Repositories - My Notes');
  }
}