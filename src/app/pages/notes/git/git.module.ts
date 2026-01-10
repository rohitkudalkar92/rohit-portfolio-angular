import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GitDetailsComponent } from './git-details.component';

import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../common/code-block.component';
import { InfoBoxComponent } from '../../../common/info-box.component';
import { ContentSectionComponent } from '../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../common/topic-header.component';
import { PracticeExerciseComponent } from '../../../common/practice-exercise.component';

const routes = [
  { path: '', component: GitDetailsComponent }
];

@NgModule({
  declarations: [
    GitDetailsComponent
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
    PracticeExerciseComponent
  ]
})
export class GitModule { }