import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoOneKnowsComponent } from './no-one-knows.component';
import { TheServerComponent } from './the-server/the-server.component';
import { TheNavigatorComponent } from './the-navigator/the-navigator.component';
import { TheFixerComponent } from './the-fixer/the-fixer.component';

const routes = [
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
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NoOneKnowsRoutingModule {}
