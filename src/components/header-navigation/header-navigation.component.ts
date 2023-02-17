import { Component, Input } from '@angular/core';

export type Anchors = {
  title: string;
  href: string;
  classes?: string;
  prefixText?: string;
  sufixText?: string;
  text: string;
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