import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from '../../../title.service';
import { QuickReferenceComponent } from '../../../common/quick-reference/quick-reference.component';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { TopicHeaderComponent } from '../../../common/topic-header/topic-header.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';
import { InfoBoxComponent } from '../../../common/info-box/info-box.component';
import { ParagraphComponent } from '../../../common/paragraph/paragraph.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { ES6_QUICK_REF_TOPICS } from './constants/es6-topics';
import { ES6_CODE_EXAMPLES } from './constants/es6-code-examples';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  standalone: true,
  imports: [
    CommonModule,
    QuickReferenceComponent,
    LayoutComponent,
    BackNavComponent,
    TopicHeaderComponent,
    ContentSectionComponent,
    InfoBoxComponent,
    ParagraphComponent,
    CodeBlockComponent
  ]
})
export class ES6Component implements OnInit {
  readonly quickRefTopics = ES6_QUICK_REF_TOPICS;
  readonly letConstCode = ES6_CODE_EXAMPLES.letConst.code;
  readonly letConstOutput = ES6_CODE_EXAMPLES.letConst.output;
  readonly arrowFunctionsCode = ES6_CODE_EXAMPLES.arrowFunctions.code;
  readonly arrowFunctionsOutput = ES6_CODE_EXAMPLES.arrowFunctions.output;
  readonly templateLiteralsCode = ES6_CODE_EXAMPLES.templateLiterals.code;
  readonly templateLiteralsOutput = ES6_CODE_EXAMPLES.templateLiterals.output;
  readonly destructuringCode = ES6_CODE_EXAMPLES.destructuring.code;
  readonly destructuringOutput = ES6_CODE_EXAMPLES.destructuring.output;
  readonly spreadRestCode = ES6_CODE_EXAMPLES.spreadRest.code;
  readonly spreadRestOutput = ES6_CODE_EXAMPLES.spreadRest.output;
  readonly defaultParametersCode = ES6_CODE_EXAMPLES.defaultParameters.code;
  readonly defaultParametersOutput = ES6_CODE_EXAMPLES.defaultParameters.output;
  readonly classesCode = ES6_CODE_EXAMPLES.classes.code;
  readonly classesOutput = ES6_CODE_EXAMPLES.classes.output;
  readonly modulesCode = ES6_CODE_EXAMPLES.modules.code;
  readonly modulesOutput = ES6_CODE_EXAMPLES.modules.output;
  readonly practiceCode = ES6_CODE_EXAMPLES.practice.code;
  readonly practiceOutput = ES6_CODE_EXAMPLES.practice.output;
  readonly promisesCode = ES6_CODE_EXAMPLES.promises.code;
  readonly promisesOutput = ES6_CODE_EXAMPLES.promises.output;
  readonly forOfLoopsCode = ES6_CODE_EXAMPLES.forOfLoops.code;
  readonly forOfLoopsOutput = ES6_CODE_EXAMPLES.forOfLoops.output;
  readonly mapSetCode = ES6_CODE_EXAMPLES.mapSet.code;
  readonly mapSetOutput = ES6_CODE_EXAMPLES.mapSet.output;
  readonly stringArrayMethodsCode = ES6_CODE_EXAMPLES.stringArrayMethods.code;
  readonly stringArrayMethodsOutput = ES6_CODE_EXAMPLES.stringArrayMethods.output;
  readonly objectEnhancementsCode = ES6_CODE_EXAMPLES.objectEnhancements.code;
  readonly objectEnhancementsOutput = ES6_CODE_EXAMPLES.objectEnhancements.output;
  readonly optionalChainingCode = ES6_CODE_EXAMPLES.optionalChaining.code;
  readonly optionalChainingOutput = ES6_CODE_EXAMPLES.optionalChaining.output;
  readonly privateFieldsCode = ES6_CODE_EXAMPLES.privateFields.code;
  readonly privateFieldsOutput = ES6_CODE_EXAMPLES.privateFields.output;
  readonly arrayMethodsES2023Code = ES6_CODE_EXAMPLES.arrayMethodsES2023.code;
  readonly arrayMethodsES2023Output = ES6_CODE_EXAMPLES.arrayMethodsES2023.output;
  readonly es2024FeaturesCode = ES6_CODE_EXAMPLES.es2024Features.code;
  readonly es2024FeaturesOutput = ES6_CODE_EXAMPLES.es2024Features.output;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('ES6 Modern JavaScript - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
