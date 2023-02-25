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

// import { NobodyKnowsHeWorkedOnModule } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.module';
import { NobodyKnowsHeWorkedOnComponent } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.component';
import { SeccionAmarillaComponent } from './nobody-knows-he-worked-on/seccion-amarilla/seccion-amarilla.component';
import { MenumaniaComponent } from './nobody-knows-he-worked-on/menumania/menumania.component';
import { CMLLComponent } from './nobody-knows-he-worked-on/cmll/cmll.component';
import { AventurasEnmascaradasComponent } from './nobody-knows-he-worked-on/aventuras-enmascaradas/aventuras-enmascaradas.component';
import { ClubAtleticoDeMadridComponent } from './nobody-knows-he-worked-on/club-atletico-de-madrid/club-atletico-de-madrid.component';
import { SkinyComponent } from './nobody-knows-he-worked-on/skiny/skiny.component';
import { TopsAndBottomsComponent } from './nobody-knows-he-worked-on/tops-and-bottoms/tops-and-bottoms.component';
import { OptimaCottonWearComponent } from './nobody-knows-he-worked-on/optima-cotton-wear/optima-cotton-wear.component';
import { RutasDeMexicoComponent } from './nobody-knows-he-worked-on/rutas-de-mexico/rutas-de-mexico.component';
import { ElMascaraComponent } from './nobody-knows-he-worked-on/el-mascara/el-mascara.component';
import { PJDFComponent } from './nobody-knows-he-worked-on/pjdf/pjdf.component';
import { InfotecComponent } from './nobody-knows-he-worked-on/infotec/infotec.component';
import { SonoraComponent } from './nobody-knows-he-worked-on/sonora/sonora.component';
import { TulumComponent } from './nobody-knows-he-worked-on/tulum/tulum.component';
import { ReynosaComponent } from './nobody-knows-he-worked-on/reynosa/reynosa.component';
import { NissanLatinoamericaComponent } from './nobody-knows-he-worked-on/nissan-latinoamerica/nissan-latinoamerica.component';
import { QueryTechnologiesComponent } from './nobody-knows-he-worked-on/query-technologies/query-technologies.component';
import { HondaMiramontesComponent } from './nobody-knows-he-worked-on/honda-miramontes/honda-miramontes.component';
import { ConcesionariosPeugeotComponent } from './nobody-knows-he-worked-on/concesionarios-peugeot/concesionarios-peugeot.component';
import { ToyotaUniversidadComponent } from './nobody-knows-he-worked-on/toyota-universidad/toyota-universidad.component';
import { CarsComponent } from './nobody-knows-he-worked-on/cars/cars.component';
import { AmericanAirlinesComponent } from './nobody-knows-he-worked-on/american-airlines/american-airlines.component';
import { HipchatComponent } from './nobody-knows-he-worked-on/hipchat/hipchat.component';
import { JohnsonAndJohnsonComponent } from './nobody-knows-he-worked-on/johnson-and-johnson/johnson-and-johnson.component';
import { CitiBanamexComponent } from './nobody-knows-he-worked-on/citi-banamex/citi-banamex.component';
import { AerisComponent } from './nobody-knows-he-worked-on/aeris/aeris.component';
import { HBOComponent } from './nobody-knows-he-worked-on/hbo/hbo.component';
import { HBOMaxComponent } from './nobody-knows-he-worked-on/hbo-max/hbo-max.component';
import { PlastiqComponent } from './nobody-knows-he-worked-on/plastiq/plastiq.component';
import { NextGenComponent } from './nobody-knows-he-worked-on/next-gen/next-gen.component';
import { SaffroloteComponent } from './nobody-knows-he-worked-on/saffrolote/saffrolote.component';

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
    MenumaniaComponent,
    CMLLComponent,
    AventurasEnmascaradasComponent,
    ClubAtleticoDeMadridComponent,
    TopsAndBottomsComponent,
    SkinyComponent,
    OptimaCottonWearComponent,
    RutasDeMexicoComponent,
    ElMascaraComponent,
    PJDFComponent,
    InfotecComponent,
    SonoraComponent,
    TulumComponent,
    ReynosaComponent,
    NissanLatinoamericaComponent,
    QueryTechnologiesComponent,
    HondaMiramontesComponent,
    ConcesionariosPeugeotComponent,
    ToyotaUniversidadComponent,
    CarsComponent,
    AmericanAirlinesComponent,
    HipchatComponent,
    JohnsonAndJohnsonComponent,
    CitiBanamexComponent,
    AerisComponent,
    HBOComponent,
    HBOMaxComponent,
    PlastiqComponent,
    NextGenComponent,
    SaffroloteComponent,

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
    // NobodyKnowsHeWorkedOnModule,
    CommonModule,
    // AngularComponentsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
