import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../components/shared/shared.module';
import { NoOneKnowsComponent } from './no-one-knows.component';
import { NoOneKnowsRoutingModule } from './no-one-knows.routing.module';
import { TheServerComponent } from './the-server/the-server.component';
import { TheNavigatorComponent } from './the-navigator/the-navigator.component';
import { TheFixerComponent } from './the-fixer/the-fixer.component';
import { CoursesComponent } from '../../components/courses/courses.component';
import { AdventuresComponent } from '../../components/adventures/adventures.component';
import { AmmoComponent } from '../../components/ammo/ammo.component';

@NgModule({
  declarations: [
    NoOneKnowsComponent,
    TheServerComponent,
    TheNavigatorComponent,
    TheFixerComponent,
    
    CoursesComponent,
    AdventuresComponent,
    AmmoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NoOneKnowsRoutingModule,
  ],
  exports: [
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoOneKnowsModule { }
