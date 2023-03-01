import { Component, Input } from '@angular/core';

@Component({
  selector: 'vz-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.scss']
})
export class MainArticleComponent {
  @Input() titleSection: string = 'Title Article';
  @Input() anchorsSection: any;
}
