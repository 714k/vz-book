import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NobodyKnowsWhoIsComponent } from './nobody-knows-who-is/nobody-knows-who-is.component';

const routes: Routes = [
  {path: "", redirectTo: 'at-the-beginning', pathMatch: "full"},
  {
    path: "at-the-beginning",
    component: AtTheBeginningComponent,
    data: {
      title: 'At the beginning - victorZamudio',
      descrption: 'Description of Home Component',
      ogTitle: 'Description of Home Component for social media',
    }
  },
  {
    path: "nobody-knows-who-is",
    component: NobodyKnowsWhoIsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
