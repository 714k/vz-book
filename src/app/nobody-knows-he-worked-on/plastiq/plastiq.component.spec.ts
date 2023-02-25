import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlastiqComponent } from './plastiq.component';

describe('PlastiqComponent', () => {
  let component: PlastiqComponent;
  let fixture: ComponentFixture<PlastiqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlastiqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlastiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
