import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulumComponent } from './tulum.component';

describe('TulumComponent', () => {
  let component: TulumComponent;
  let fixture: ComponentFixture<TulumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TulumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TulumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
