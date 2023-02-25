import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasDeMexicoComponent } from './rutas-de-mexico.component';

describe('RutasDeMexicoComponent', () => {
  let component: RutasDeMexicoComponent;
  let fixture: ComponentFixture<RutasDeMexicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasDeMexicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasDeMexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
