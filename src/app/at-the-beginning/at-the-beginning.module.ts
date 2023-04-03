import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../components/shared/shared.module';
import { AtTheBeginningComponent } from './at-the-beginning.component';
import { AtTheBeginningRoutingModule } from './at-the-beginning.routing.module';

@NgModule({
  declarations: [
    AtTheBeginningComponent
  ],
  imports: [
    CommonModule,
    AtTheBeginningRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AtTheBeginningModule { }
