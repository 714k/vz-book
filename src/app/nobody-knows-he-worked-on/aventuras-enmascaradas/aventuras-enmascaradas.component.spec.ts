import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventurasEnmascaradasComponent } from './aventuras-enmascaradas.component';

describe('AventurasEnmascaradasComponent', () => {
  let component: AventurasEnmascaradasComponent;
  let fixture: ComponentFixture<AventurasEnmascaradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AventurasEnmascaradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AventurasEnmascaradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
