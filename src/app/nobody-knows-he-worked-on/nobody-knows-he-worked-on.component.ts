import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import nobodyKnowsData  from './nobody-knows-he-worked-on.component.json';


@Component({
  selector: 'vz-nobody-knows-he-worked-on',
  templateUrl: './nobody-knows-he-worked-on.component.html',
  styleUrls: ['./nobody-knows-he-worked-on.component.scss']
})
export class NobodyKnowsHeWorkedOnComponent implements OnInit, OnDestroy {
  anchorsSectionNavigation = nobodyKnowsData.sectionNavigation.sections;
  summaries = nobodyKnowsData.summaries;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("nobody knows he worked on... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The portfolio of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'book, projects, portfolio, mexican, web, ui, developer'
    });

    this.document.body.classList.add('nobody-knows-he-worked-on');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('nobody-knows-he-worked-on');
  }
}
