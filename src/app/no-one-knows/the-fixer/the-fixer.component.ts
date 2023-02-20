import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import theFixerData from './the-fixer.component.json'

@Component({
  selector: 'vz-the-fixer',
  templateUrl: './the-fixer.component.html',
  styleUrls: ['./the-fixer.component.scss']
})
export class TheFixerComponent implements OnInit, OnDestroy {
  titleHeaderNavigation = theFixerData.sectionNavigation.title;
  anchorsSectionNavigation = theFixerData.sectionNavigation.sections;
  ammos = theFixerData.ammos;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("The Fixer - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The skills of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'debugger, skills, mexican, web, ui, developer'
    });

    this.document.body.classList.add('the-fixer');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('the-fixer');
  }
}
