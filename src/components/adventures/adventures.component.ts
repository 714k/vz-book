import { Component, Input } from '@angular/core';

import { Anchors } from '../header-navigation/header-navigation.component';

type Adventure = {
  adventureNumber: number;
  period: string;
  company: string;
  industry: string;
  position: string;
  activities: string;
  accounts: string;
}

@Component({
  selector: 'vz-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {
  @Input() adventures: Adventure[] = [];
  @Input() fragmentLinks: Anchors = [];
}
