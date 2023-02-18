import { Component, Input } from '@angular/core';

import { Anchors } from '../header-navigation/header-navigation.component';

type Link = {
  title: string;
  text: string;
  href: string;
}

type Account = {
  title: string;
  text: string;
  links?: Link[];
};

type Activity = {
  title: string;
  links?: Link[]
}

type Summary = {
  activities: Activity[];
  accounts: Account[];
}

type Adventure = {
  adventureNumber: number;
  period: string;
  company: string;
  industry: string;
  position: string;
  summary: Summary;
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
