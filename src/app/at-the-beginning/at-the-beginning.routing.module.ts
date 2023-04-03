import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtTheBeginningComponent } from './at-the-beginning.component';

const routes = [
  {
    path: "at-the-beginning",
    component: AtTheBeginningComponent,
    data: {
      title: 'At the beginning - victorZamudio',
      descrption: 'Description of Home Component',
      ogTitle: 'Description of Home Component for social media',
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AtTheBeginningRoutingModule {}
