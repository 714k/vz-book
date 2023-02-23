import { Component, Input } from '@angular/core';

type Anchors = {
  title: string;
  href: string;
  classes?: string;
  prefixText?: string;
  sufixText?: string;
  separator?: string;
  text: string;
} []

@Component({
  selector: 'vz-fragment-link',
  templateUrl: './fragment-link.component.html',
  styleUrls: ['./fragment-link.component.scss']
})
export class FragmentLinkComponent {
  @Input() anchors: Anchors = [];
  @Input() active: number = 1;
  @Input() classes: string = "";
  @Input() hideTitle: boolean = false;
}
