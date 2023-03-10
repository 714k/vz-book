import { Component, Input } from '@angular/core';

@Component({
  selector: 'vz-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {
  @Input() colorMenuIcon: string = 'white';
}
