import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExperienceComponent } from './experience.component';
import { ProjectsComponent } from './projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];