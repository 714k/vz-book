import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nor-where-to-find-him',
  templateUrl: './nor-where-to-find-him.component.html',
  styleUrls: ['./nor-where-to-find-him.component.scss']
})
export class NorWhereToFindHimComponent implements OnInit, AfterViewInit {
  constructor(private meta: Meta, private title: Title) {}

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
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('nor-where-to-find-him');
  }
}