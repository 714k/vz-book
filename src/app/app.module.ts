import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NoOneKnowsComponent } from './no-one-knows/no-one-knows.component';
import { TheServerComponent } from './no-one-knows/the-server/the-server.component';
import { TheNavigatorComponent } from './no-one-knows/the-navigator/the-navigator.component';
import { TheFixerComponent } from './no-one-knows/the-fixer/the-fixer.component';

@NgModule({
  declarations: [
    AppComponent,
    AtTheBeginningComponent,
    NoOneKnowsComponent,
    TheServerComponent,
    TheNavigatorComponent,
    TheFixerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
