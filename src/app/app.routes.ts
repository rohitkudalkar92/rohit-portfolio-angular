import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TimelineComponent } from './timeline.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '**', redirectTo: '' }
];