import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { AngularComponentsModule } from '@714k/vz-angular-design-system';
// import {HeaderNavigationComponent } from '@714k/vz-angular-design-system/components/header-navigation/header-navigation.component';

import { HeaderNavigationComponent } from '../components/header-navigation/header-navigation.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NoOneKnowsComponent } from './no-one-knows/no-one-knows.component';
import { TheServerComponent } from './no-one-knows/the-server/the-server.component';
import { TheNavigatorComponent } from './no-one-knows/the-navigator/the-navigator.component';
import { TheFixerComponent } from './no-one-knows/the-fixer/the-fixer.component';
import { NobodyKnowsHeWorkedOnComponent } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.component';
import { SeccionAmarillaComponent } from './nobody-knows-he-worked-on/seccion-amarilla/seccion-amarilla.component';
import { NorWhereToFindHimComponent } from './nor-where-to-find-him/nor-where-to-find-him.component';
import { SkipLinksComponent } from '../components/skip-links/skip-links.component';
import { FragmentLinkComponent } from '../components/fragment-link/fragment-link.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { AdventuresComponent } from '../components/adventures/adventures.component';
import { AmmoComponent } from '../components/ammo/ammo.component';
import { BackToTopComponent } from '../components/back-to-top/back-to-top.component';
import { ProjectSummaryComponent } from '../components/project-summary/project-summary.component';
import { ProjectBriefComponent } from '../components/project-brief/project-brief.component';
import { ProjectGalleryComponent } from '../components/project-gallery/project-gallery.component';
import { ProjectsNavigationComponent } from '../components/projects-navigation/projects-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    AtTheBeginningComponent,
    NoOneKnowsComponent,
    TheServerComponent,
    TheNavigatorComponent,
    TheFixerComponent,
    NobodyKnowsHeWorkedOnComponent,
    SeccionAmarillaComponent,
    NorWhereToFindHimComponent,
    HeaderNavigationComponent,
    SkipLinksComponent,
    FragmentLinkComponent,
    CoursesComponent,
    AdventuresComponent,
    AmmoComponent,
    BackToTopComponent,
    ProjectSummaryComponent,
    ProjectBriefComponent,
    ProjectGalleryComponent,
    ProjectsNavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    // AngularComponentsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
