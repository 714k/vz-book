import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NobodyKnowsWhoIsComponent } from './nobody-knows-who-is/nobody-knows-who-is.component';

@NgModule({
  declarations: [
    AppComponent,
    AtTheBeginningComponent,
    NobodyKnowsWhoIsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
