import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AtTheBeginningComponent } from './at-the-beginning/at-the-beginning.component';
import { NoOneKnowsComponent } from './no-one-knows/no-one-knows.component';
import { TheFixerComponent } from './no-one-knows/the-fixer/the-fixer.component';
import { TheNavigatorComponent } from './no-one-knows/the-navigator/the-navigator.component';
import { TheServerComponent } from './no-one-knows/the-server/the-server.component';
import { NobodyKnowsHeWorkedOnComponent } from './nobody-knows-he-worked-on/nobody-knows-he-worked-on.component';
import { SeccionAmarillaComponent } from './nobody-knows-he-worked-on/seccion-amarilla/seccion-amarilla.component';
import { MenumaniaComponent } from './nobody-knows-he-worked-on/menumania/menumania.component';
import { CMLLComponent } from './nobody-knows-he-worked-on/cmll/cmll.component';
import { AventurasEnmascaradasComponent } from './nobody-knows-he-worked-on/aventuras-enmascaradas/aventuras-enmascaradas.component';
import { ClubAtleticoDeMadridComponent } from './nobody-knows-he-worked-on/club-atletico-de-madrid/club-atletico-de-madrid.component';
import { SkinyComponent } from './nobody-knows-he-worked-on/skiny/skiny.component';
import { TopsAndBottomsComponent } from './nobody-knows-he-worked-on/tops-and-bottoms/tops-and-bottoms.component';
import { OptimaCottonWearComponent } from './nobody-knows-he-worked-on/optima-cotton-wear/optima-cotton-wear.component';
import { RutasDeMexicoComponent } from './nobody-knows-he-worked-on/rutas-de-mexico/rutas-de-mexico.component';
import { ElMascaraComponent } from './nobody-knows-he-worked-on/el-mascara/el-mascara.component';
import { PJDFComponent } from './nobody-knows-he-worked-on/pjdf/pjdf.component';
import { InfotecComponent } from './nobody-knows-he-worked-on/infotec/infotec.component';
import { SonoraComponent } from './nobody-knows-he-worked-on/sonora/sonora.component';
import { TulumComponent } from './nobody-knows-he-worked-on/tulum/tulum.component';
import { ReynosaComponent } from './nobody-knows-he-worked-on/reynosa/reynosa.component';
import { NissanLatinoamericaComponent } from './nobody-knows-he-worked-on/nissan-latinoamerica/nissan-latinoamerica.component';
import { QueryTechnologiesComponent } from './nobody-knows-he-worked-on/query-technologies/query-technologies.component';
import { HondaMiramontesComponent } from './nobody-knows-he-worked-on/honda-miramontes/honda-miramontes.component';
import { ConcesionariosPeugeotComponent } from './nobody-knows-he-worked-on/concesionarios-peugeot/concesionarios-peugeot.component';
import { ToyotaUniversidadComponent } from './nobody-knows-he-worked-on/toyota-universidad/toyota-universidad.component';
import { CarsComponent } from './nobody-knows-he-worked-on/cars/cars.component';
import { AmericanAirlinesComponent } from './nobody-knows-he-worked-on/american-airlines/american-airlines.component';
import { HipchatComponent } from './nobody-knows-he-worked-on/hipchat/hipchat.component';
import { JohnsonAndJohnsonComponent } from './nobody-knows-he-worked-on/johnson-and-johnson/johnson-and-johnson.component';
import { CitiBanamexComponent } from './nobody-knows-he-worked-on/citi-banamex/citi-banamex.component';
import { AerisComponent } from './nobody-knows-he-worked-on/aeris/aeris.component';
import { HBOComponent } from './nobody-knows-he-worked-on/hbo/hbo.component';
import { HBOMaxComponent } from './nobody-knows-he-worked-on/hbo-max/hbo-max.component';
import { PlastiqComponent } from './nobody-knows-he-worked-on/plastiq/plastiq.component';
import { NextGenComponent } from './nobody-knows-he-worked-on/next-gen/next-gen.component';
import { SaffroloteComponent } from './nobody-knows-he-worked-on/saffrolote/saffrolote.component';

import { NorWhereToFindHimComponent } from './nor-where-to-find-him/nor-where-to-find-him.component';

const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 16],
};

const routes: Routes = [
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
  {
    path: "at-the-beginning/nor-where-to-find-him",
    component: NorWhereToFindHimComponent,
  },
  {
    path: "", 
    redirectTo: 'at-the-beginning', 
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
