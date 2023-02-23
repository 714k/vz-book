import { Component, Input } from '@angular/core';

@Component({
  selector: 'vz-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.scss']
})
export class ProjectsNavigationComponent {
  @Input() isBottom: boolean = false;
  @Input() projectsNavigation: any;
}
