import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DIRECTIVES_CODE_EXAMPLES, DIRECTIVES_BEST_PRACTICES } from './constants/directives-constants';

@Component({
  selector: 'app-directives-notes',
  templateUrl: './directives-notes.component.html'
})
export class DirectivesNotesComponent implements OnInit {
  readonly structuralExample = DIRECTIVES_CODE_EXAMPLES.structural;
  readonly attributeExample = DIRECTIVES_CODE_EXAMPLES.attribute;
  readonly customDirectiveExample = DIRECTIVES_CODE_EXAMPLES.customDirective;
  readonly structuralDirectiveExample = DIRECTIVES_CODE_EXAMPLES.structuralDirective;
  readonly bestPractices = DIRECTIVES_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Directives - Angular');
  }
}