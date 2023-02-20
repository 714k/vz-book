import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nor-where-to-find-him',
  templateUrl: './nor-where-to-find-him.component.html',
  styleUrls: ['./nor-where-to-find-him.component.scss']
})
export class NorWhereToFindHimComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Nor where to find him... - Victor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'All means to contact mexican UI Developer Victor Zamudio'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'Contact, contact details, message, social networks, projects, portfolio, mexican, web, ui, developer'
    });

    this.document.body.classList.add('nor-where-to-find-him');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('nor-where-to-find-him');
  }
}