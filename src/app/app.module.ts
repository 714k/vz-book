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

// console.warn(AngularComponentsModule.toString());
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
    HeaderNavigationComponent
  ],
  imports: [
    BrowserModule,
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
