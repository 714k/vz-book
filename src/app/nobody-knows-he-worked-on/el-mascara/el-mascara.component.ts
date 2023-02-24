import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import projectsData from '../projects.data.json';
import projectData from './el-mascara.component.json';

@Component({
  selector: 'vz-el-mascara',
  templateUrl: './el-mascara.component.html',
  styleUrls: ['./el-mascara.component.scss']
})
export class ElMascaraComponent implements OnInit, OnDestroy {
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
    this.title.setTitle("El Máscara - Víctor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'Design of Website.'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'El Máscara, Project, Portfolio, Design, Designer, Web, HTML 5, XAML 1.0, CSS 3, Objective-C 5.0, PHP, .NET 4.0, Web Standards, Accessibility, Usability, UX, Responsive Web Design, Microformats, Web Optimization, SEO, Photoshop CS6, Fireworks CS6, Illustrator CS6, Dreamweaver CS6, Visual Studio 2013, XCode 5, Eclipse Juno, Cocoa 10.4.'
    });

    this.document.body.classList.add('el-mascara');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('el-mascara');
  }
}
