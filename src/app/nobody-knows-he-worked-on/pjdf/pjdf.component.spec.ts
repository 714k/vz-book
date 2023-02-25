import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjdfComponent } from './pjdf.component';

describe('PjdfComponent', () => {
  let component: PjdfComponent;
  let fixture: ComponentFixture<PjdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
