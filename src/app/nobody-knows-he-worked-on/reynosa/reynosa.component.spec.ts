import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReynosaComponent } from './reynosa.component';

describe('ReynosaComponent', () => {
  let component: ReynosaComponent;
  let fixture: ComponentFixture<ReynosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReynosaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReynosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
