import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { ROUTING_QUICK_REF_TOPICS } from './constants/routing-topics';
import { ROUTING_CODE_EXAMPLES } from './constants/routing-code-examples';

@Component({
  selector: 'app-routing-notes',
  templateUrl: './routing-notes.component.html'
})
export class RoutingNotesComponent implements OnInit {
  readonly quickRefTopics = ROUTING_QUICK_REF_TOPICS;
  readonly basicRoutingCode = ROUTING_CODE_EXAMPLES.basicRouting;
  readonly routeParametersCode = ROUTING_CODE_EXAMPLES.routeParameters;
  readonly queryParamsCode = ROUTING_CODE_EXAMPLES.queryParams;
  readonly childRoutesCode = ROUTING_CODE_EXAMPLES.childRoutes;
  readonly lazyLoadingCode = ROUTING_CODE_EXAMPLES.lazyLoading;
  readonly routeGuardsCode = ROUTING_CODE_EXAMPLES.routeGuards;
  readonly programmaticNavigationCode = ROUTING_CODE_EXAMPLES.programmaticNavigation;
  readonly routerLinkActiveCode = ROUTING_CODE_EXAMPLES.routerLinkActive;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Routing & Navigation - My Notes');
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
