import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOneKnowsComponent } from './no-one-knows.component';

describe('NoOneKnowsComponent', () => {
  let component: NoOneKnowsComponent;
  let fixture: ComponentFixture<NoOneKnowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOneKnowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoOneKnowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
