import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../components/shared/shared.module';
import { NobodyKnowsHeWorkedOnRoutingModule } from './nobody-knows-he-worked-on.routing.module';
import { ProjectBriefComponent } from '../../components/project-brief/project-brief.component';
import { ProjectGalleryComponent } from '../../components/project-gallery/project-gallery.component';
import { ProjectSummaryComponent } from '../../components/project-summary/project-summary.component';
import { ProjectsNavigationComponent } from '../../components/projects-navigation/projects-navigation.component';
import {
  NobodyKnowsHeWorkedOnComponent,

  AerisComponent,
  AmericanAirlinesComponent,
  AventurasEnmascaradasComponent,
  CarsComponent,
  CitiBanamexComponent,
  ClubAtleticoDeMadridComponent,
  CMLLComponent,
  HBOComponent,
  HBOMaxComponent,
  JohnsonAndJohnsonComponent,
  MenumaniaComponent,
  NextGenComponent,
  NissanLatinoamericaComponent,
  OptimaCottonWearComponent,
  PlastiqComponent,
  QueryTechnologiesComponent,
  RutasDeMexicoComponent,
  SaffroloteComponent,
  SeccionAmarillaComponent,
  SkinyComponent,
  SonoraComponent,
  TopsAndBottomsComponent,
} from './index';


@NgModule({
  declarations: [
    NobodyKnowsHeWorkedOnComponent,

    AerisComponent,
    AmericanAirlinesComponent,
    AventurasEnmascaradasComponent,
    CarsComponent,
    CitiBanamexComponent,
    ClubAtleticoDeMadridComponent,
    CMLLComponent,
    HBOComponent,
    HBOMaxComponent,
    JohnsonAndJohnsonComponent,
    MenumaniaComponent,
    NextGenComponent,
    NissanLatinoamericaComponent,
    OptimaCottonWearComponent,
    PlastiqComponent,
    QueryTechnologiesComponent,
    RutasDeMexicoComponent,
    SaffroloteComponent,
    SeccionAmarillaComponent,
    SkinyComponent,
    SonoraComponent,
    TopsAndBottomsComponent,

    ProjectBriefComponent,
    ProjectGalleryComponent,
    ProjectSummaryComponent,
    ProjectsNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NobodyKnowsHeWorkedOnRoutingModule
  ],
  exports: [
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NobodyKnowsHeWorkedOnModule { }
