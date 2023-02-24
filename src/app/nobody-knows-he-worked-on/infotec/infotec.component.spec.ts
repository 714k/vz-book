import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotecComponent } from './infotec.component';

describe('InfotecComponent', () => {
  let component: InfotecComponent;
  let fixture: ComponentFixture<InfotecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
