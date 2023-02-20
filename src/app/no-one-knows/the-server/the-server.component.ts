import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import theServerData from './the-server.component.json';

@Component({
  selector: 'vz-the-server',
  templateUrl: './the-server.component.html',
  styleUrls: ['./the-server.component.scss']
})
export class TheServerComponent implements OnInit, OnDestroy {
  courses = theServerData.courses;
  anchorsSectionNavigation = theServerData.seccionNavigation;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("The Server - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'The profile of mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'profile, mexican, web, ui, developer'
    });
    
    this.document.body.classList.add('the-server');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('the-server');
  }
}
