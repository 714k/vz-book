import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimaCottonWearComponent } from './optima-cotton-wear.component';

describe('OptimaCottonWearComponent', () => {
  let component: OptimaCottonWearComponent;
  let fixture: ComponentFixture<OptimaCottonWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimaCottonWearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimaCottonWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
