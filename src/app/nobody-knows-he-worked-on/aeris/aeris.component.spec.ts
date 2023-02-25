import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerisComponent } from './aeris.component';

describe('AerisComponent', () => {
  let component: AerisComponent;
  let fixture: ComponentFixture<AerisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
