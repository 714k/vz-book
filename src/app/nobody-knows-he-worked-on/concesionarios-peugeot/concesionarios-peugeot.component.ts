import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { ProjectsUtils } from '../utils';
import projectsData from '../projects.data.json';
import projectData from './concesionarios-peugeot.component.json';

@Component({
  selector: 'vz-concesionarios-peugeot',
  templateUrl: './concesionarios-peugeot.component.html',
  styleUrls: ['./concesionarios-peugeot.component.scss']
})
export class ConcesionariosPeugeotComponent implements OnInit, OnDestroy {
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
    this.title.setTitle("Concesionarios Peugeot - Víctor Zamudio"); 
    
    this.meta.updateTag({ 
      name: 'description',
      content: 'Design of Website.'
    });
    
    this.meta.updateTag({ 
      name: 'keywords',
      content: 'Concesionarios Peugeot, Project, Portfolio, Design, Designer, Web, HTML 5, XAML 1.0, CSS 3, Objective-C 5.0, PHP, .NET 4.0, Web Standards, Accessibility, Usability, UX, Responsive Web Design, Microformats, Web Optimization, SEO, Photoshop CS6, Fireworks CS6, Illustrator CS6, Dreamweaver CS6, Visual Studio 2013, XCode 5, Eclipse Juno, Cocoa 10.4.'
    });

    this.document.body.classList.add('concesionarios-peugeot');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('concesionarios-peugeot');
  }
}
