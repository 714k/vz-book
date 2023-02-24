import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonoraComponent } from './sonora.component';

describe('SonoraComponent', () => {
  let component: SonoraComponent;
  let fixture: ComponentFixture<SonoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
