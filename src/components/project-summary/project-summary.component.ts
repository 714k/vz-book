import { Component, Input } from '@angular/core';

type Summary = {
  id: string;
  title: string;
  year: number;
  industry: string;
  technologies: string[];
  classes: string;
  link: {
    href: string;
    title: string;
    text: string;
  }
  image: {
    id: string;
    src: string;
    alt: string;
  }
}

@Component({
  selector: 'vz-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent {
  @Input() summaries: Summary[] = [];
}
