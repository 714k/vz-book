import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobodyKnowsHeWorkedOnComponent } from './nobody-knows-he-worked-on.component';

describe('NobodyKnowsHeWorkedOnComponent', () => {
  let component: NobodyKnowsHeWorkedOnComponent;
  let fixture: ComponentFixture<NobodyKnowsHeWorkedOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobodyKnowsHeWorkedOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobodyKnowsHeWorkedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
