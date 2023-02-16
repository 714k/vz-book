import { Component, Input } from '@angular/core';

type Anchors = {
  title: string;
  href: string;
  classes?: string;
  prefixLabel?: string;
  sufixLabel?: string;
  label: string;
} []

@Component({
  selector: 'vz-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent {
  @Input() title: string = "";
  @Input() anchors: Anchors = [];
}