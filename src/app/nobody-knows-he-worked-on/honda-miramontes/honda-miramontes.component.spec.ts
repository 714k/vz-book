import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaMiramontesComponent } from './honda-miramontes.component';

describe('HondaMiramontesComponent', () => {
  let component: HondaMiramontesComponent;
  let fixture: ComponentFixture<HondaMiramontesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondaMiramontesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HondaMiramontesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
