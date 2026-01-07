import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout/layout.component';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  pageTitle = CONSTANTS.SKILLS.TITLE;
  additionalTitle = CONSTANTS.SKILLS.ADDITIONAL_TITLE;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.SKILLS);
  }
  skillCategories = [
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[0].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[0].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[0].icon,
      skills: [
        { name: 'Angular', proficiency: 95, experience: '5+ years' },
        { name: 'React', proficiency: 90, experience: '4+ years' },
        { name: 'TypeScript', proficiency: 92, experience: '5+ years' },
        { name: 'JavaScript', proficiency: 95, experience: '8+ years' },
        { name: 'HTML5', proficiency: 98, experience: '8+ years' },
        { name: 'CSS3', proficiency: 95, experience: '8+ years' },
        { name: 'Tailwind CSS', proficiency: 88, experience: '3+ years' },
        { name: 'SCSS', proficiency: 90, experience: '6+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[1].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[1].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[1].icon,
      skills: [
        { name: 'Node.js', proficiency: 85, experience: '4+ years' },
        { name: 'Express', proficiency: 82, experience: '3+ years' },
        { name: 'PHP', proficiency: 80, experience: '6+ years' },
        { name: 'MySQL', proficiency: 85, experience: '7+ years' },
        { name: 'MongoDB', proficiency: 78, experience: '3+ years' },
        { name: 'REST APIs', proficiency: 90, experience: '6+ years' },
        { name: 'GraphQL', proficiency: 70, experience: '2+ years' },
        { name: 'WordPress', proficiency: 88, experience: '5+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[2].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[2].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[2].icon,
      skills: [
        { name: 'NgRx', proficiency: 88, experience: '3+ years' },
        { name: 'Redux', proficiency: 85, experience: '3+ years' },
        { name: 'RxJS', proficiency: 90, experience: '4+ years' },
        { name: 'Git', proficiency: 92, experience: '7+ years' },
        { name: 'Webpack', proficiency: 75, experience: '3+ years' },
        { name: 'Jest', proficiency: 80, experience: '3+ years' },
        { name: 'Cypress', proficiency: 75, experience: '2+ years' },
        { name: 'Docker', proficiency: 70, experience: '2+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[3].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[3].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[3].icon,
      skills: [
        { name: 'Material-UI', proficiency: 90, experience: '4+ years' },
        { name: 'Bootstrap', proficiency: 92, experience: '6+ years' },
        { name: 'Figma', proficiency: 75, experience: '3+ years' },
        { name: 'Responsive Design', proficiency: 95, experience: '7+ years' },
        { name: 'Accessibility', proficiency: 82, experience: '4+ years' },
        { name: 'Performance Optimization', proficiency: 88, experience: '5+ years' },
        { name: 'Cross-browser Testing', proficiency: 90, experience: '6+ years' },
        { name: 'Mobile-first Design', proficiency: 92, experience: '5+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[4].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[4].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[4].icon,
      skills: [
        { name: 'Python', proficiency: 88, experience: '4+ years' },
        { name: 'TensorFlow', proficiency: 82, experience: '3+ years' },
        { name: 'PyTorch', proficiency: 78, experience: '2+ years' },
        { name: 'Pandas', proficiency: 85, experience: '3+ years' },
        { name: 'NumPy', proficiency: 83, experience: '3+ years' },
        { name: 'Scikit-learn', proficiency: 80, experience: '2+ years' },
        { name: 'Jupyter', proficiency: 90, experience: '4+ years' },
        { name: 'Git', proficiency: 95, experience: '8+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[5].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[5].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[5].icon,
      skills: [
        { name: 'Responsive Design', proficiency: 95, experience: '7+ years' },
        { name: 'Cross-browser Testing', proficiency: 90, experience: '6+ years' },
        { name: 'Mobile-first Design', proficiency: 92, experience: '5+ years' },
        { name: 'Component Reusability', proficiency: 94, experience: '6+ years' },
        { name: 'Browser Compatibility', proficiency: 88, experience: '7+ years' },
        { name: 'Progressive Web Apps', proficiency: 85, experience: '4+ years' },
        { name: 'Accessibility Standards', proficiency: 82, experience: '4+ years' },
        { name: 'Design System Creation', proficiency: 90, experience: '5+ years' }
      ]
    }
  ];

  additionalSkills = [
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].icon,
      tools: ['Agile/Scrum', 'Code Reviews', 'CI/CD', 'TDD', 'Clean Code', 'SOLID Principles']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].icon,
      tools: ['Team Leadership', 'Technical Mentoring', 'Code Standards', 'Architecture Design', 'Technical Interviews']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].icon,
      tools: ['Google Analytics', 'Lighthouse', 'Web Vitals', 'Sentry', 'Performance Monitoring', 'SEO Optimization']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].icon,
      tools: ['Debugging Expertise', 'Root Cause Analysis', 'Critical Thinking', 'Attention to Detail', 'Issue Resolution', 'Code Optimization']
    }
  ];

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}