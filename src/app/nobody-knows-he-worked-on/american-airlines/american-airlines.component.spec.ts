import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanAirlinesComponent } from './american-airlines.component';

describe('AmericanAirlinesComponent', () => {
  let component: AmericanAirlinesComponent;
  let fixture: ComponentFixture<AmericanAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanAirlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericanAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
