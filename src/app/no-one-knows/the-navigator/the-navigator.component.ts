import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import theNavigatorData from './the-navigator.component.json'

@Component({
  selector: 'vz-the-navigator',
  templateUrl: './the-navigator.component.html',
  styleUrls: ['./the-navigator.component.scss']
})
export class TheNavigatorComponent implements OnInit, OnDestroy {
  anchorsSectionNavigation = theNavigatorData.seccionNavigation;
  adventures = theNavigatorData.adventures;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("The Navigator - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The professional experience of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'professional, laboral, experience, adventures, work, mexican, web, ui, developer'
    });

    this.document.body.classList.add('the-navigator');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('the-navigator');
  }
}
