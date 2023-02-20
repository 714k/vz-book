import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import noOneKnowsData from './no-one-knows.component.json';
@Component({
  selector: 'vz-no-one-knows',
  templateUrl: './no-one-knows.component.html',
  styleUrls: ['./no-one-knows.component.scss']
})
export class NoOneKnowsComponent implements OnInit, OnDestroy {
  anchorsSectionNavigation = noOneKnowsData.sectionNavigation;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title    
  ) {}

  ngOnInit(): void {
    this.title.setTitle("No one knows... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'All info about the UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'info, web, ui, developer'
    });

    this.document.body.classList.add('no-one-knows');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('no-one-knows');
  }
}
