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
  ConcesionariosPeugeotComponent,
  ElMascaraComponent,
  HBOComponent,
  HBOMaxComponent,
  HipchatComponent,
  HondaMiramontesComponent,
  InfotecComponent,
  JohnsonAndJohnsonComponent,
  MenumaniaComponent,
  NextGenComponent,
  NissanLatinoamericaComponent,
  OptimaCottonWearComponent,
  PJDFComponent,
  PlastiqComponent,
  QueryTechnologiesComponent,
  ReynosaComponent,
  RutasDeMexicoComponent,
  SaffroloteComponent,
  SeccionAmarillaComponent,
  SkinyComponent,
  SonoraComponent,
  TopsAndBottomsComponent,
  ToyotaUniversidadComponent,
  TulumComponent,
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
    path: "at-the-beginning/nobody-knows-he-worked-on/hipchat",
    component: HipchatComponent,
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
    path: "at-the-beginning/nobody-knows-he-worked-on/el-mascara",
    component: ElMascaraComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/pjdf",
    component: PJDFComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/infotec",
    component: InfotecComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/sonora",
    component: SonoraComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/tulum",
    component: TulumComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/reynosa",
    component: ReynosaComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/nissan-latinoamerica",
    component: NissanLatinoamericaComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/query-technologies",
    component: QueryTechnologiesComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/honda-miramontes",
    component: HondaMiramontesComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/concesionarios-peugeot",
    component: ConcesionariosPeugeotComponent,
  },
  {
    path: "at-the-beginning/nobody-knows-he-worked-on/toyota-universidad",
    component: ToyotaUniversidadComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NobodyKnowsHeWorkedOnRoutingModule {}
