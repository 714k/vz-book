import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import { AngularComponentsModule } from '@714k/vz-angular-design-system';
// import {HeaderNavigationComponent } from '@714k/vz-angular-design-system/components/header-navigation/header-navigation.component';
// import VueLibrary from '@714k/vz-vue-design-system';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AtTheBeginningModule } from './at-the-beginning/at-the-beginning.module';
import { NoOneKnowsModule } from './no-one-knows/no-one-knows.module';
import { NobodyKnowsHeWorkedOnModule } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.module';

import { NorWhereToFindHimComponent } from './nor-where-to-find-him/nor-where-to-find-him.component';
@NgModule({
  declarations: [
    AppComponent,
    NorWhereToFindHimComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AtTheBeginningModule,
    NoOneKnowsModule,
    NobodyKnowsHeWorkedOnModule,
    CommonModule,
    // AngularComponentsModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
