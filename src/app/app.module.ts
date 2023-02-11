import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NobodyKnowsComponent } from './nobody-knows/nobody-knows.component';
import { TheServerComponent } from './nobody-knows/the-server/the-server.component';
import { TheNavigatorComponent } from './nobody-knows/the-navigator/the-navigator.component';
import { TheFixerComponent } from './nobody-knows/the-fixer/the-fixer.component';

@NgModule({
  declarations: [
    AppComponent,
    AtTheBeginningComponent,
    NobodyKnowsComponent,
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
