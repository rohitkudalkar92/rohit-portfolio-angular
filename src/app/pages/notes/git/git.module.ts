import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GitDetailsComponent } from './git-details.component';
import { GitBasicsNotesComponent } from './git-basics/notes.component';
import { BranchingMergingNotesComponent } from './branching-merging/notes.component';
import { RemoteRepositoriesNotesComponent } from './remote-repositories/notes.component';
import { GitWorkflowNotesComponent } from './git-workflow/notes.component';
import { AdvancedGitNotesComponent } from './advanced-git/notes.component';

import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../common/code-block.component';
import { InfoBoxComponent } from '../../../common/info-box.component';
import { ContentSectionComponent } from '../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../common/topic-header.component';
import { PracticeExerciseComponent } from '../../../common/practice-exercise.component';
import { SearchBoxComponent } from '../../../common/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list.component';
import { PageHeaderComponent } from '../../../common/page-header.component';

const routes = [
  { path: '', component: GitDetailsComponent },
  { path: 'git-basics', component: GitBasicsNotesComponent },
  { path: 'branching-merging', component: BranchingMergingNotesComponent },
  { path: 'remote-repositories', component: RemoteRepositoriesNotesComponent },
  { path: 'git-workflow', component: GitWorkflowNotesComponent },
  { path: 'advanced-git', component: AdvancedGitNotesComponent }
];

@NgModule({
  declarations: [
    GitDetailsComponent,
    GitBasicsNotesComponent,
    BranchingMergingNotesComponent,
    RemoteRepositoriesNotesComponent,
    GitWorkflowNotesComponent,
    AdvancedGitNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    LayoutComponent,
    BackNavComponent,
    CodeBlockComponent,
    InfoBoxComponent,
    ContentSectionComponent,
    TopicHeaderComponent,
    PracticeExerciseComponent,
    SearchBoxComponent,
    TopicsListComponent,
    PageHeaderComponent
  ]
})
export class GitModule { }