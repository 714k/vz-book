import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NobodyKnowsHeWorkedOnComponent,

  AerisComponent,
  AmericanAirlinesComponent,
  AventurasEnmascaradasComponent,
  CarsComponent,
  CitiBanamexComponent,
  ClubAtleticoDeMadridComponent,
  CMLLComponent,
  HBOComponent,
  HBOMaxComponent,
  JohnsonAndJohnsonComponent,
  MenumaniaComponent,
  NextGenComponent,
  NissanLatinoamericaComponent,
  OptimaCottonWearComponent,
  PlastiqComponent,
  QueryTechnologiesComponent,
  RutasDeMexicoComponent,
  SaffroloteComponent,
  SeccionAmarillaComponent,
  SkinyComponent,
  SonoraComponent,
  TopsAndBottomsComponent,
} from './index';

const routes = [
  {
    path: "at-the-beginning/nobody-knows-he-worked-on",
    component: NobodyKnowsHeWorkedOnComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/saffrolote",
    component: SaffroloteComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/next-gen",
    component: NextGenComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/plastiq",
    component: PlastiqComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/hbo-max",
    component: HBOMaxComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/hbo",
    component: HBOComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/aeris",
    component: AerisComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/citi-banamex",
    component: CitiBanamexComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/johnson-and-johnson",
    component: JohnsonAndJohnsonComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/american-airlines",
    component: AmericanAirlinesComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/cars",
    component: CarsComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/seccion-amarilla",
    component: SeccionAmarillaComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/menumania",
    component: MenumaniaComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/cmll",
    component: CMLLComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/aventuras-enmascaradas",
    component: AventurasEnmascaradasComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/club-atletico-de-madrid",
    component: ClubAtleticoDeMadridComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/skiny",
    component: SkinyComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/tops-and-bottoms",
    component: TopsAndBottomsComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/optima-cotton-wear",
    component: OptimaCottonWearComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/rutas-de-mexico",
    component: RutasDeMexicoComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/sonora",
    component: SonoraComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/nissan-latinoamerica",
    component: NissanLatinoamericaComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/query-technologies",
    component: QueryTechnologiesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NobodyKnowsHeWorkedOnRoutingModule {}
