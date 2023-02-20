import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NoOneKnowsComponent } from './no-one-knows/no-one-knows.component';
import { TheFixerComponent } from './no-one-knows/the-fixer/the-fixer.component';
import { TheNavigatorComponent } from './no-one-knows/the-navigator/the-navigator.component';
import { TheServerComponent } from './no-one-knows/the-server/the-server.component';
import { NobodyKnowsHeWorkedOnComponent } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.component';
import { SeccionAmarillaComponent } from './nobody-knows-he-worked-on/seccion-amarilla/seccion-amarilla.component';
import { NorWhereToFindHimComponent } from './nor-where-to-find-him/nor-where-to-find-him.component';

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 16],
};

const routes: Routes = [
  {
    path: "at-the-beginning",
    component: AtTheBeginningComponent,
    data: {
      title: 'At the beginning - victorZamudio',
      descrption: 'Description of Home Component',
      ogTitle: 'Description of Home Component for social media',
    },
  },
  {
    path: "at-the-beginning/no-one-knows",
    component: NoOneKnowsComponent,
  },
  {
    path: "at-the-beginning/no-one-knows/the-server",
    component: TheServerComponent,
  },
  {
    path: "at-the-beginning/no-one-knows/the-navigator",
    component: TheNavigatorComponent,
  },
  {
    path: "at-the-beginning/no-one-knows/the-fixer",
    component: TheFixerComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on",
    component: NobodyKnowsHeWorkedOnComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/seccion-amarilla",
    component: SeccionAmarillaComponent,
  },
  {
    path: "at-the-beginning/nor-where-to-find-him",
    component: NorWhereToFindHimComponent,
  },
  {
    path: "", 
    redirectTo: 'at-the-beginning', 
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
