import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NobodyKnowsComponent } from './nobody-knows/nobody-knows.component';
import { TheServerComponent } from './nobody-knows/the-server/the-server.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: 'at-the-beginning', 
    pathMatch: "full"
  },
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
    path: "at-the-beginning/nobody-knows",
    component: NobodyKnowsComponent,
  },
  {
    path: "at-the-beginning/nobody-knows/the-server",
    component: TheServerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
