import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import theServerData from './the-server.component.json';

@Component({
  selector: 'vz-the-server',
  templateUrl: './the-server.component.html',
  styleUrls: ['./the-server.component.scss']
})
export class TheServerComponent implements OnInit, AfterViewInit {
  courses = theServerData.courses;
  titleHeaderNavigation = "In this section";
  anchorsSectionNavigation = theServerData.seccionNavigation;

  constructor(private meta: Meta, private title: Title) {}

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
  }

  ngAfterViewInit(): void {
    document.querySelector('body')?.classList.add('the-server');
  }
}
