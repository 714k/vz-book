import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import projectsData from '../projects.data.json';
import projectData from './next-gen.component.json';

@Component({
  selector: 'vz-next-gen',
  templateUrl: './next-gen.component.html',
  styleUrls: ['./next-gen.component.scss']
})
export class NextGenComponent implements OnInit, OnDestroy {
  anchorsSectionNavigation = projectsData.sectionNavigation;
  galleries = projectsData.galleries;
  galleryTypes = projectsData.galleryTypes;
  projectsNavigation = projectData.projectsNavigation;
  brief = projectData.brief;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("NextGen - Víctor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'Design of Website.'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'NextGen, Project, Portfolio, Design, Designer, Web, HTML 5, XAML 1.0, CSS 3, Objective-C 5.0, PHP, .NET 4.0, Web Standards, Accessibility, Usability, UX, Responsive Web Design, Microformats, Web Optimization, SEO, Photoshop CS6, Fireworks CS6, Illustrator CS6, Dreamweaver CS6, Visual Studio 2013, XCode 5, Eclipse Juno, Cocoa 10.4.'
    });

    this.document.body.classList.add('next-gen');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('next-gen');
  }
}
