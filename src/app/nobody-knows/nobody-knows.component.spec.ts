import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobodyKnowsComponent } from './nobody-knows.component';

describe('NobodyKnowsComponent', () => {
  let component: NobodyKnowsComponent;
  let fixture: ComponentFixture<NobodyKnowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobodyKnowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobodyKnowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
