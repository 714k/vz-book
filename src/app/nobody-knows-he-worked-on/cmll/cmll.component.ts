import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { ProjectsUtils } from '../utils';
import projectsData from '../projects.data.json';
import projectData from './cmll.component.json';

@Component({
  selector: 'vz-cmll',
  templateUrl: './cmll.component.html',
  styleUrls: ['./cmll.component.scss']
})
export class CMLLComponent implements OnInit, OnDestroy {
  anchorsSectionNavigation = projectsData.sectionNavigation;
  projectsNavigation = projectData.projectsNavigation;
  brief = projectData.brief;
  galleries = ProjectsUtils.getProjectGalleries(projectsData.galleries, projectData?.galleries)
  galleryTypes = ProjectsUtils.getGalleryTypes(projectsData.galleryTypes, projectData?.galleries)

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("CMLL - Víctor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'Design of Portal, Blog, WebApp, App for iOS, Android, Smart TV and Windows 8 for the Search Engine and ads in CMLL.'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'CMLL, Project, Portfolio, Design, Designer, Web, C# 5.0, XAML 1.0, Java 1.7, Objective-C 5.0, PHP, .NET 4.0, Web Standards, Accessibility, Usability, UX, Responsive Web Design, Microformats, Web Optimization, SEO, Photoshop CS6, Fireworks CS6, Illustrator CS6, Dreamweaver CS6, Visual Studio 2013, XCode 5, Eclipse Juno, Cocoa 10.4.'
    });

    this.document.body.classList.add('cmll');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('cmll');
  }
}
