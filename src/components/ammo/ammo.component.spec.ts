import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoComponent } from './ammo.component';

describe('AmmoComponent', () => {
  let component: AmmoComponent;
  let fixture: ComponentFixture<AmmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
