import { Component, Input } from '@angular/core';

@Component({
  selector: 'vz-project-brief',
  templateUrl: './project-brief.component.html',
  styleUrls: ['./project-brief.component.scss']
})
export class ProjectBriefComponent {
  @Input() brief: any; 
}
