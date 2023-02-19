import { Component, Input } from '@angular/core';

type Entity = {
  name: string;
  years: number;
  use: string;
  percentage: string;
}

type Ammo = {
  id: string;
  title: string;
  entities: Entity[];
}

type AmmoType = {
  id: string;
  title: string;
  entities: Entity[];
}

@Component({
  selector: 'vz-ammo',
  templateUrl: './ammo.component.html',
  styleUrls: ['./ammo.component.scss']
})
export class AmmoComponent {
  @Input() ammo: any = {};
}
