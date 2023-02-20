import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import atTheBeginningData from './at-the-beginning-component.json'
@Component({
  selector: 'vz-at-the-beginning',
  templateUrl: './at-the-beginning.component.html',
  styleUrls: ['./at-the-beginning.component.scss']
})
export class AtTheBeginningComponent implements OnInit, OnDestroy {
  anchorsHeaderNavigation = atTheBeginningData;
  anchorsSectionNavigation = atTheBeginningData.seccionNavigation;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("At the beginning... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The beginning of my career'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'beginning, web, ui, developer'
    });

    this.document.body.classList.add('at-the-beginning');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('at-the-beginning');
  }
}
