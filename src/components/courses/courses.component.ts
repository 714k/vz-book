import { Component, Input } from '@angular/core';

export type Course = {
  title: string;
  who: string;
  when: string;
  where: string;
}

@Component({
  selector: 'vz-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() courses: Array<Course> = [];
}
