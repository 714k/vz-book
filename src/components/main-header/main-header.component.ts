import { Component, Input } from '@angular/core';

@Component({
  selector: 'vz-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  @Input() color: string = '#ff6600';
  @Input() secondaryColor: string | undefined;
  @Input() colorIcon: string | undefined;
}
