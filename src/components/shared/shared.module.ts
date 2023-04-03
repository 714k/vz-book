import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { LogoComponent } from './logo/logo.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    BackToTopComponent,
    HeaderNavigationComponent,
    LogoComponent,
    MainArticleComponent,
    MainHeaderComponent,
    MainNavigationComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    BackToTopComponent,
    HeaderNavigationComponent,
    LogoComponent,
    MainArticleComponent,
    MainHeaderComponent,
    MainNavigationComponent,
  ]
})
export class SharedModule { }
