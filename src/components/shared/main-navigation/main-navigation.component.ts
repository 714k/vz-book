import { Component, Input } from '@angular/core';

import mainNavigation from './main-navigation.component.json'

@Component({
  selector: 'vz-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {
  @Input() colorMenuIcon: string = 'white';
  anchorsMainNavigation = mainNavigation
}
