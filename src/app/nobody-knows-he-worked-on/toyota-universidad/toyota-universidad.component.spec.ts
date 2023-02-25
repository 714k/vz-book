import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyotaUniversidadComponent } from './toyota-universidad.component';

describe('ToyotaUniversidadComponent', () => {
  let component: ToyotaUniversidadComponent;
  let fixture: ComponentFixture<ToyotaUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyotaUniversidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyotaUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
