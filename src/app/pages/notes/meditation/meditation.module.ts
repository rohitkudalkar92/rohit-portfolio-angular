import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MeditationDetailsComponent } from './meditation-details.component';

import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { InfoBoxComponent } from '../../../common/info-box/info-box.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';
import { TopicHeaderComponent } from '../../../common/topic-header/topic-header.component';
import { PracticeExerciseComponent } from '../../../common/practice-exercise/practice-exercise.component';
import { SearchBoxComponent } from '../../../common/search-box/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list/topics-list.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';

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
    TopicsListComponent,
    PageHeaderComponent
  ]
})
export class MeditationModule { }