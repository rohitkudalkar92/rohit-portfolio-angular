import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MeditationDetailsComponent } from './meditation-details.component';

import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../common/code-block.component';
import { InfoBoxComponent } from '../../../common/info-box.component';
import { ContentSectionComponent } from '../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../common/topic-header.component';
import { PracticeExerciseComponent } from '../../../common/practice-exercise.component';
import { SearchBoxComponent } from '../../../common/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list.component';

const routes = [
  { path: '', component: MeditationDetailsComponent }
];

@NgModule({
  declarations: [
    MeditationDetailsComponent
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
    TopicsListComponent
  ]
})
export class MeditationModule { }