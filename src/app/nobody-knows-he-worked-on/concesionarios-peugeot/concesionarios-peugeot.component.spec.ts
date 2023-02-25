import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionariosPeugeotComponent } from './concesionarios-peugeot.component';

describe('ConcesionariosPeugeotComponent', () => {
  let component: ConcesionariosPeugeotComponent;
  let fixture: ComponentFixture<ConcesionariosPeugeotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcesionariosPeugeotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcesionariosPeugeotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
