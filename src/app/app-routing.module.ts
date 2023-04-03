import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { NorWhereToFindHimComponent } from './nor-where-to-find-him/nor-where-to-find-him.component';

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 16],
};

const routes: Routes = [
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
